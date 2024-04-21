class GenerateRandonData {
  generate(length = 5) {
    const containStack = "abcdefghijklmnopqrstuvwxyz0123456789";
    let user = "";
    for (let i = 0; i < length; i++) {
      user += containStack.charAt(
        Math.floor(Math.random() * containStack.length)
      );
    }
    return user;
  }
}

export const generateRandonData = new GenerateRandonData();
