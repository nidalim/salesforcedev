public class AccountTriggerHandler {
    public static void CreateAccounts(List<Account> accts){
        for (Account a : accts) {
            if(a.ShippingState!=a.BillingState)
            {
                a.ShippingState = a.BillingState;
            }
        }
    }
}