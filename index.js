    import { create } from 'venom-bot'
    import * as dotenv from 'dotenv'
    import { Configuration, OpenAIApi } from 'openai'


    dotenv.config()


    create({

        session: 'GptBot',
        multidevice: false,
        // headless: false,
        
        useChrome: true,
        statusFind:
        (statusSession, session) => {
        console.log('Status Session: ', statusSession); //return isLogged || notLogged || browserClose || qrReadSuccess || qrReadFail || autocloseCalled || desconnectedMobile || deleteToken || chatsAvailable || deviceNotConnected || serverWssNotConnected || noOpenBrowser || initBrowser || openBrowser || connectBrowserWs || initWhatsapp || erroPageWhatsapp || successPageWhatsapp || waitForLogin || waitChat || successChat
        //Create session wss return "serverClose" case server for close
        console.log('Session name: ', session);
        }
        
    })
    .then((client) => {

        console.log('Bot started.');
        start(client)
    })
    .catch((error) => {

        console.log(error);
    })

    process.on('SIGINT', function() {
        client.close();
      });

    const configuration = new Configuration({

        apiKey: process.env.OPENAI_API_KEY
    })


    const openai = new OpenAIApi(configuration)


    const getGPTResponse = async (clientText) => {
        
        
        const options = {
            model: "gpt-3.5-turbo",
            messages: [
                {"role": "user", "content": clientText}
            ],
            temperature: 0.5,
            max_tokens: 500
        }

        try {
            const getResponse = await openai.createChatCompletion(options)

            let response = getResponse.data.choices[0].message.content
            
            return `GPT 🤖\n\n ${response.trim()}`
        } catch (e) {
            return `❌ Error. Something went wrong on OpenAI API. (${e.getResponse?.data?.error?.message})`
        }
    }
    const commands = async (client, message) => {

        console.log(message);


        const iaCommands = {
            gpt: "/bot",
        }

        // Get the slash command.
        let wordOne = message.body.substring(0, message.body.indexOf(" "))
        // Condition to prevent automessage response.
        const sender = message.from.includes(process.env.PHONE_NUMBER) ? message.to : message.from 
        switch (wordOne) {
            case iaCommands.gpt:

            // Get the question to API complete.
                const question = message.body.substring(message.body.indexOf(" "));

                // Send the answer to the user.

                getGPTResponse(question).then(async (response) => {
                    
                    await client.sendText(sender, `${response}`)
                })
                break
        }
    }

    async function start(client) {

        await client.onAnyMessage((message) => commands(client, message));
    }

    