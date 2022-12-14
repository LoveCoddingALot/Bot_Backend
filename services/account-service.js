const AccountModel = require('../models/account-model');

class AccountService {
  async createAccount(accountLogin) {
    const account = await AccountModel.create({ accountLogin });
    if (account) {
      return { status: 'success' };
    } else {
      return { status: 'fialed' };
    }
  }
  async setPushSubscribers(accountLogin, subscribers) {
    const account = await AccountModel.find({ accountLogin });
    if (account.length !== 0) {
      subscribers.forEach((login) => {
        account[0].accountSubscribers.push(login);
      });
      await account[0].save();
      return account[0];
    } else {
      return { message: 'account not found' };
    }
  }
  async setSubscribers(accountLogin, subscribers) {
    const account = await AccountModel.find({ accountLogin });
    if (account.length !== 0) {
      account[0].accountSubscribers = subscribers;
      await account[0].save();
      return account[0];
    } else {
      return { message: 'account not found' };
    }
  }
  async setPushPosts(accountLogin, posts) {
    const account = await AccountModel.find({ accountLogin });
    if (account.length !== 0) {
      posts.forEach((post) => {
        account[0].accountPosts.push(post);
      });
      await account[0].save();
      return account[0];
    } else {
      return { message: 'account not found' };
    }
  }
  async setPosts(accountLogin, posts) {
    const account = await AccountModel.find({ accountLogin });
    if (account.length !== 0) {
      account[0].accountPosts = posts;
      await account[0].save();
      return account[0];
    } else {
      return { message: 'account not found' };
    }
  }
  async getAccountInfo(accountLogin) {
    const account = await AccountModel.find({ accountLogin });
    if (account.length !== 0) {
      return account[0];
    } else {
      return { message: 'account not found' };
    }
  }
}

module.exports = new AccountService();
