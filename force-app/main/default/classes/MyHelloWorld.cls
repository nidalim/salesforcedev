public class MyHelloWorld {
   // This method updates the Description field for a list
   // of accounts to read "Hello World".
   public static void addHelloWorld(Account[] accs){
      for (Account a:accs){
         if (a.Description != 'Hello World')
         a.Description = 'Hello World';
      }
   }
}