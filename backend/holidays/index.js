const { HolidayAPI } = require('holidayapi');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 5001;
const host = '0.0.0.0';

const app = express();
app.use(cors());
app.use(express.json());

const holidayApi = new HolidayAPI({ key: process.env.API_KEY });

app.get('/holidays', async (req, res) => {
  res.json(
    await holidayApi.holidays(req.query).then((response) => response.holidays)
  );
});

app.listen(port, host, () => console.log(`listening on ${host}:${port}`));
