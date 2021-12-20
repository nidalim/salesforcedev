@isTest
private class AccountTriggerTEST{
    @isTest static void TestCreateNewAccountInBulk() {
        // Test Setup data
        // Create 200 new Accounts
        List<Account> accts = new List<Account>();
        for(Integer i=0; i < 200; i++) {
            Account acct = new Account(Name='Test Account ' + i, BillingState = 'CA');
            
            accts.add(acct);
        }              
        // Perform Test
        Test.startTest();
        insert accts;                               
        Test.stopTest();
        // Verify that 200 new Accounts were inserted
        //List<Account> verifyAccts = [SELECT Id FROM Account WHERE BillingState = 'CA'];
        //System.assertEquals(200, verifyAccts.size());    
        // Also verify that 200 new Opportunities were inserted
        //List<Opportunity> verifyOpps = [SELECT Id FROM Opportunity];                              
        //System.assertEquals(200, verifyOpps.size());    
        //
        List<Account> lstAccount = [select ShippingState from Account];
        for (Account a: lstAccount )
        {
            System.assertEquals('CA', a.ShippingState, 'ERROR');
        }                         
    }
}