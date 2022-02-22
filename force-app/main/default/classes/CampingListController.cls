public with sharing class CampingListController {
    @AuraEnabled
    public static List<Camping_Item__c> getItems() {
        return [SELECT Id, Name, Price__c, Quantity__c, Packed__c,CreatedDate
                FROM Camping_Item__c WITH SECURITY_ENFORCED];
    }

    @AuraEnabled
    public static Camping_Item__c saveItem(Camping_Item__c items) {
        // Perform isUpdateable() checking first, then
        upsert items;
        return items;
    }
}