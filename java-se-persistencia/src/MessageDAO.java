import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class MessageDAO {
    public static void createMessage(Message message) {
        Database database = new Database();
        Connection connection = database.getConnection();

        PreparedStatement statement = null;
        try {
            statement = connection.prepareStatement("INSERT INTO messages (message, author) VALUES (?, ?)");
            statement.setString(1, message.message);
            statement.setString(2, message.author);
            statement.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    public static void readAllMessages() {}

    public static void deleteMessage(int id) {}

    public static void updateMessage(Message message) {}
}
