Feature('Vote');

Scenario('I choose dogs', ({ I }) => {
    I.amOnPage('https://tp-vote.herokuapp.com/');
    I.seeElement('//*[@id="a"]');
    I.seeElement('//*[@id="b"]');
});

// npx codeceptjs run --steps

Scenario('test voting app vote view', ({ I }) => {
    I.amOnPage('https://tp-vote.herokuapp.com/');
    I.see('Ducks vs Dogs!')
    I.see('DUCKS');
    I.see('DOGS');
});