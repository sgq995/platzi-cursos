import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Scanner;

public class MessageService {
    public static void createMessage() {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Message: ");
        String message = scanner.nextLine();

        System.out.println("Author: ");
        String author = scanner.nextLine();

        Message entry = new Message();
        entry.message = message;
        entry.author = author;

        MessageDAO.createMessage(entry);
    }

    public static void readAllMessages() {
        Database database = new Database();
        database.getConnection();
    }

    public static void deleteMessage() {
        Database database = new Database();
        database.getConnection();
    }

    public static void updateMessage() {
        Database database = new Database();
        database.getConnection();
    }
}
