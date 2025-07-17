namespace CursoEmVideo_lessons.Lesson_5;

public class BankAccount
{
    //Attributes
    public int numAcc;
    protected string type;
    private string owner;
    private string balance;
    private bool status;
    
    //Methods
    public BankAccount(int numAcc, string type, string owner, string balance, bool status)
    {
        this.numAcc = numAcc;
        this.type = type;
        this.owner = owner;
        this.balance = balance;
        this.status = status;
    }
    public void CloseAccount()
    {
        
    }

    public void Withdraw(int amount)
    {
        
    }

}