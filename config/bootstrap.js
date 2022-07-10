/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function () {
  // console.log(a, b, c);
  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // Set up fake development data (or if we already have some, avast)
  if ((await User.count()) > 0) {
    return;
  }
  await User.createEach([
    {
      id: '62ca2be5f7870307e5f395ec',
      username: 'Patryk',
      password: 'abc123',
      email: 'patryk@gmail.com',
      photoURL:
        'https://www.wykop.pl/cdn/c3201142/comment_1593933134jAkKEPKLp69SrWJS5LvjNx.jpg',
    },
    {
      id: '62cac2579278aeb09e0ea984',
      username: 'Ewa',
      password: 'cda123',
      email: 'ewa.nalewa@buziaczek.pl',
      photoURL:
        'https://images6.fanpop.com/image/articles/248000/random_248159_1.jpg',
    },
  ]);

  await Post.createEach([
    {
      id: '62cac16d9278aeb09e0ea982',
      title: 'Ember Octane is AWESOME!',
      body: 'Ember Octane describes a set of new features that, when taken together, represent a foundational improvement to the way you use Ember. It has modern, streamlined components and state management that make it fun to build web applications. With seamless interoperability for existing apps, teams can migrate at their own pace, while developers building new apps start out with the best that Ember has to offer.',
      owner: '62ca2be5f7870307e5f395ec',
    },
    {
      id: '62cac16d9278aeb09e0ea983',
      title: 'I want to meet someone...',
      body: 'Im very lonely!',
      owner: '62cac2579278aeb09e0ea984',
    },
    {
      id: '62cac16d9278aeb09e0ea985',
      title: 'Opel for sale',
      body: 'For only one kilo of potatoes $$$',
      owner: '62cac2579278aeb09e0ea984',
    },
  ]);

  await Like.createEach([
    {
      user: '62cac2579278aeb09e0ea984',
      post: '62cac16d9278aeb09e0ea982',
    },
    {
      user: '62cac2579278aeb09e0ea984',
      post: '62cac16d9278aeb09e0ea983',
    },
    {
      user: '62ca2be5f7870307e5f395ec',
      post: '62cac16d9278aeb09e0ea983',
    },
  ]);
};
