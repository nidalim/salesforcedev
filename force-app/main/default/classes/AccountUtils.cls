public class AccountUtils {

    public static List<Account> accountsByState(String BillingState){
        
        List<Account> accs = [SELECT Id, Name FROM Account WHERE BillingState =: BillingState];

        system.debug(accs);
        
        return accs;
    }
}

//AccountUtils.accountsByState('Serbia');