const express = require('express');
const mongoose = require('mongoose');
const Report = require('../../models/Report');
const auth = require('../../middleware/auth');

const router = express.Router();


router.post('/', async (req, res) => {
    const { platform, link, desc } = req.body;
    console.log(platform, link, desc);

    try {
        let report = await Report.findOne({ link });
        console.log(report);
        if (!report) {
            report = new Report({
                platform,
                link,
                desc
            });
            console.log(report);
            await report.save();
        }
        else if (!report.status) {
            report = {
                ...report,
                desc,
                status: true
            }
            await report.save();
        }

        return res.json({ msg: "success" });
    }
    catch (err) {
        console.log(err.message);
        return res.status(500).json({ msg: "failure" });
    }

});

router.get('/', auth, async (req, res) => {
    console.log('gettin reports');
    try {
        const reports = await Report.find({ status: true });
        if (!reports) return res.status(500).json({ msg: "failure" });
        return res.json(reports);
        
    }
    catch(err){
        console.log(err.message);
        return res.status(500).json({ msg: "failure" });
    }
});

router.put('/', auth, async (req, res) => {
    const { link } = req.body;

    try {
        let report = await Report.findOne({ link });
        if (report){
            report = {
                ...report,
                status: false
            };
        }

        return res.json({ msg: "success" });
    }
    catch (err) {
        console.log(err.message);
        return res.status(500).json({ msg: "failure" });
    }
});


module.exports = router;