function getShortMessages(messages) {
  return messages
    .filter((mess) => {
      return mess.message.length < 50;
    })
    .map((current) => {
      return current.message;
    });
}

module.exports = getShortMessages;
