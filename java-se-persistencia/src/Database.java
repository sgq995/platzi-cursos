import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Database {
    public Connection getConnection() {
        Connection connection = null;
        try {
            connection = DriverManager.getConnection("jdbc:mariadb://localhost:3306/messages_app", "root", "example");
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        return connection;
    }
}
