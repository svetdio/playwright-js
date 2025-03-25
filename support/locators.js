export default {

    multi: {


    },

    login: {

        user: 'input[placeholder="Enter username"]',
        pass: 'input[placeholder="Enter password"]',
        submit: 'button[type="submit"]',
        loginError: 'div[class="login-error"]',
        welcome: 'div > h1',
        logout: 'button[class="logout-btn"]',
        lang: 'button[id="headlessui-listbox-button-1"]',
        cn: 'li[id="headlessui-listbox-option-59"]',
    },

    modules: {

        report: '.nav-container:nth-of-type(1) span',
        content: '.nav-container:nth-of-type(2) span',
        lobby: '.nav-container:nth-of-type(3) span',
        promotion: '.nav-container:nth-of-type(4) span',
        permission: '.nav-container:nth-of-type(5) span',
        system: '.nav-container:nth-of-type(6) span',
        logs: '.nav-container:nth-of-type(7) span',

        bettingHistory: '.nav-container:nth-of-type(1) a:nth-child(1)',
        transferHistory: '.nav-container:nth-of-type(1) a:nth-child(2)',
        playerCashFlow: '.nav-container:nth-of-type(1) a:nth-child(3)',
        promoReport: '.nav-container:nth-of-type(1) a:nth-child(4)',
        gameReport: '.nav-container:nth-of-type(1) a:nth-child(5)',
        opDailySum: '.nav-container:nth-of-type(1) a:nth-child(6)',
        opMonthlySum: '.nav-container:nth-of-type(1) a:nth-child(7)',
        vendorSum: '.nav-container:nth-of-type(1) a:nth-child(8)',
        playerSum: '.nav-container:nth-of-type(1) a:nth-child(9)',
        sportsBet: '.nav-container:nth-of-type(1) a:nth-child(10)',

        player: '.nav-container:nth-of-type(2) a:nth-child(1)',
        operator: '.nav-container:nth-of-type(2) a:nth-child(2)',
        vendor: '.nav-container:nth-of-type(2) a:nth-child(3)',
        games: '.nav-container:nth-of-type(2) a:nth-child(4)',
        subGame: '.nav-container:nth-of-type(2) a:nth-child(5)',
        betLimit: '.nav-container:nth-of-type(2) a:nth-child(6)',
        currency: '.nav-container:nth-of-type(2) a:nth-child(7)',

        media: '.nav-container:nth-of-type(3) a:nth-child(1)',
        announce: '.nav-container:nth-of-type(3) a:nth-child(2)',

        promoManage: '.nav-container:nth-of-type(4) a:nth-child(1)',

        role: '.nav-container:nth-of-type(5) a:nth-child(1)',
        user: '.nav-container:nth-of-type(5) a:nth-child(2)',
        
        maintenance: '.nav-container:nth-of-type(6) a:nth-child(1)'
    },


}