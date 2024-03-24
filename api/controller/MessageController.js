import messageModel from "../Models/messageModel.js";

//creatMessage
export async function createMessage(req, res) {
  const { chatId, senderId, text } = req.body;

  const message = new messageModel({
    chatId,
    senderId,
    text,
  });

  try {
    const response = await message.save();
    res.status(200).json(response)
    console.log("NewMessage");
  
  } catch (error) {
    console.log(error)
    res.status(500),json(error)
    console.log("not have NewMessage");
  }
}

//getMessage
export async function getMessage(req, res) {
    const { chatId } = req.params

    try{
        const messages = await messageModel.find({ chatId })
        res.status(200).json(messages)
        console.log("message", messages)
    }
    catch(error) {
        console.log(error);
        res.status(500), json(error);
    }
}
