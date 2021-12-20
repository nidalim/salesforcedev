public class AnimalLocator{
    public static String getAnimalNameById(Integer id){
        String retVal = null;
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://th-apex-http-callout.herokuapp.com/animals/'+id);
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        system.debug('**********response ' + response.getStatusCode());
		system.debug('**********response ' + response.getBody());
        
        if (response.getStatusCode() == 200) {
            Map<String, Object> results = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
            Map<string,object> mapOfAnimals = (map<string,object>) results.get('animal');
			//system.debug('Received animals: ' + animals);
            retVal = string.valueof(mapOfAnimals.get('name'));
            system.debug('retVal: ' + retVal);
        }
        
        return retVal;
    }
}