function getShortMessages(messages) {
  return messages
    .filter((message) => {
      return message.message.length < 50;
    })
    .map((current) => {
      return current.message;
    });
}

module.exports = getShortMessages;
