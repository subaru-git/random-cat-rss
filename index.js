'use strict';

const axios = require('axios');
const config = require('dotenv').config();

(async () => {
  const response = await axios.get('http://aws.random.cat/meow');
  await axios.post(process.env.TEAMS_HOOK_URL, {
    type: 'message',
    attachments: [
      {
        contentType: 'application/vnd.microsoft.card.adaptive',
        contentUrl: null,
        content: {
          $schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
          type: 'AdaptiveCard',
          version: '1.2',
          body: [
            {
              type: 'Image',
              altText: 'meow',
              url: response.data.file,
              msTeams: {
                allowExpand: true,
              }
            }
          ]
        }
      }
    ]
  })
})();
