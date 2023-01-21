import axios from 'axios';
import * as dotenv from 'dotenv'
dotenv.config();

// Pass incoming webhook URL with environment variable `GCHAT_WEBHOOK_URL`.
const WEBHOOK_URL = process.env.GCHAT_WEBHOOK_URL

const title = `Hi`
const subtitle = `Hello`
const paragraph = `Hasta La Vista, Baby.`
const widget = { textParagraph: { text: paragraph } }

exports.gChat = {
    sendWebHook: () => {
        axios.post(WEBHOOK_URL, {
            cards: [
                {
                    header: {
                        title: title,
                        subtitle
                    },
                    sections: [
                        {
                            widgets: [widget],
                        },
                    ],
                },
            ],
        })
        .then((res) => {
            return res;
        })
        .catch((err) => {
            // console.error(err.toJSON())
            return err;
        });
    }
};