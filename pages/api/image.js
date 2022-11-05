import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    // organization: "org-fzcWoVVemrdR8Gmg1r3qtWfQ",
    apiKey: process.env.OPENAI_API_KEY,
});


export default async function handler(req, res) {
    // return res.status(200).json({ imageURL: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-fzcWoVVemrdR8Gmg1r3qtWfQ/user-WLcbrI2GOkoWhYsx1EqRaQT8/img-QB5zfJf8GMAtkod82PI8AmdL.png?st=2022-11-05T02%3A16%3A01Z&se=2022-11-05T04%3A16%3A01Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-11-05T03%3A16%3A01Z&ske=2022-11-06T03%3A16%3A01Z&sks=b&skv=2021-08-06&sig=FhPm3nfAKHtrAKSO45Kzcd6CpFfxFvl3E/xCVAKzVYE%3D'})
    if (!req.body.prompt) return res.status(400).json({message: 'Pass in prompt field for image generation'});
    const openai = new OpenAIApi(configuration);
    const response = await openai.createImage({
        prompt: req.body.prompt,
        n: 1,
        size: "1024x1024",
    });

    if (!response.data) throw new Error('Unable to get image');
    console.log('received url ' + response.data.data[0].url);

    // return response.data.data[0].url;
    res.status(200).json({ imageURL: response.data.data[0].url })
}