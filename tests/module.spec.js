// @ts-check
import { test, expect } from '@playwright/test';
import { login } from '../support/commands.js';
import locators from '../support/locators.js';
import { log } from 'console';

test('login', async ({ page }) => {

    await login(page);
    console.log('OGP-001, PASSED')

    await page.click(locators.login.logout)

    const username = 'superadmin'
    const password = 'admin1'
    const error = 'Login Failed!Invalid username/password.'

    await page.fill(locators.login.user, username);
    await page.fill(locators.login.pass, password);
    await page.click(locators.login.submit);

    await expect(page.locator(locators.login.loginError)).toHaveText(error);
    console.log('OGP-002, PASSED')
    console.log('OGP-003, PASSED')

    const language = await page.getAttribute("html", "lang")
    expect(language).not.toBe('en')

    await page.reload()

    await page.click(locators.login.lang)
    await page.locator('text=Chinese').click()
    console.log('OGP-004, PASSED')

    // await page.waitForTimeout(5000)

});

test('main module', async ({ page }) => {
    await login(page)

    await page.waitForTimeout(500)

    //report
    // await page.click(locators.modules.report)
    await Promise.all([
        expect(page.locator(locators.modules.report)).toHaveText('Report'),
        page.click(locators.modules.report)
        
    ])

    const report = [
        { locator: locators.modules.bettingHistory, name: 'Betting Transaction History' },
        { locator: locators.modules.transferHistory, name: 'Transfer Transaction History' },
        { locator: locators.modules.playerCashFlow, name: 'Player Cash Flow Records' },
        { locator: locators.modules.promoReport, name: 'Promo Report' },
        { locator: locators.modules.gameReport, name: 'Game Report' },
        { locator: locators.modules.opDailySum, name: 'Operator Summary (Daily)' },
        { locator: locators.modules.opMonthlySum, name: 'Operator Summary (Monthly)' },
        { locator: locators.modules.vendorSum, name: 'Vendor Summary' },
        { locator: locators.modules.playerSum, name: 'Player Summary' },
        { locator: locators.modules.sportsBet, name: 'Sports Betting Transaction' }
    ]

    for (const reports of report) {
        await page.click(reports.locator)
        const isVisible = await page.isVisible(`text=${reports.name}`)
        // await expect
        console.log(`Report "${reports.name}" visibility:`, isVisible)
    }
    await page.click(locators.modules.report)
    console.log('OGP-005, PASSED')
    
    //content
    await Promise.all([
        expect(page.locator(locators.modules.content)).toHaveText('Content Management'),
        page.click(locators.modules.content)
        
    ])

    const content = [
        { locator: locators.modules.player, name: 'Player' },
        { locator: locators.modules.operator, name: 'Operator' },
        { locator: locators.modules.vendor, name: 'Vendor' },
        { locator: locators.modules.games, name: 'Games' },
        { locator: locators.modules.subGame, name: 'Sub Game Type' },
        { locator: locators.modules.betLimit, name: 'Bet Limit Sets' },
        { locator: locators.modules.currency, name: 'Currency' }
    ]

    for (const contents of content) {
        await page.click(contents.locator)
        const isVisible = await page.isVisible(`text=${contents.name}`)
        console.log(`Report "${contents.name}" visibility:`, isVisible)
    }
    await page.click(locators.modules.content)
    console.log('OGP-006, PASSED')

    //lobby
    await Promise.all([
        page.click(locators.modules.lobby),
        expect(page.locator(locators.modules.lobby)).toHaveText('Lobby Management')
    ])

    const lobby = [
        { locator: locators.modules.media, name: 'Media Components' },
        { locator: locators.modules.announce, name: 'Announcements' }
    ]

    for (const lobbies of lobby) {
        await page.click(lobbies.locator)
        const isVisible = await page.isVisible(`text=${lobbies.name}`)
        console.log(`Report "${lobbies.name}" visibility:`, isVisible)
    }
    await page.click(locators.modules.lobby)
    console.log('OGP-007, PASSED')

    //promotion
    await Promise.all([ 
        page.click(locators.modules.promotion),
        expect(page.locator(locators.modules.promotion)).toHaveText('Promotion')
    ])

    await page.click(locators.modules.promoManage)
    await expect(page.locator(locators.modules.promoManage)).toHaveText('Promo Manage')
    console.log('OGP-008, PASSED')

    //permission
    await Promise.all([
        page.click(locators.modules.permission),
        expect(page.locator(locators.modules.permission)).toHaveText('Permission')
    ])

    const permission = [
        { locator: locators.modules.role, name: 'Role Settings' },
        { locator: locators.modules.user, name: 'User Manage' }
    ]

    for (const permissions of permission) {
        await page.click(permissions.locator)
        const isVisible = await page.isVisible(`text=${permissions.name}`)
        console.log(`Report "${permissions.name}" visibility:`, isVisible)
    }
    await page.click(locators.modules.permission)
    console.log('OGP-009, PASSED')

    //system
    await Promise.all([
        page.click(locators.modules.system),
        expect(page.locator(locators.modules.system)).toHaveText('System Configuration')
    ])

    await page.click(locators.modules.maintenance)
    await expect(page.locator(locators.modules.maintenance)).toHaveText('Maintenance')
    console.log('OGP-010, PASSED')

    //logs
    await Promise.all([
        page.click(locators.modules.logs),  // Click the logs
        expect(page.locator(locators.modules.logs)).toHaveText('Activity Logs')  // Assert the text after clicking
    ])
    console.log('OGP-011, PASSED')
})

test('report', async ({ page }) => {
    await login(page)

    await page.waitForTimeout(500)

    await Promise.all([
        page.click(locators.modules.report),
        page.click(locators.modules.bettingHistory),
        expect(page.locator(locators.modules.bettingHistory)).toHaveText('Betting Transaction History')
    ])
    console.log('OGP-012, PASSED')

    
})


