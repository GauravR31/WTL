

import java.io.IOException;
import java.sql.*;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Servlet
 */
@WebServlet("/Servlet")
public class Servlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * Default constructor. 
     */
    public Servlet() {
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
		String name = request.getParameter("name");
		String email = request.getParameter("email");
		String password = request.getParameter("password");
		String city = request.getParameter("city");
		String state = request.getParameter("state");
		String gender = request.getParameter("gender");
		boolean promo = request.getParameter("promo") != null; 
		
		String JDBC_DRIVER = "com.mysql.jdbc.Driver";
		String DB_URL = "jdbc:mysql://localhost:3306/newUsers";
		
		String USER = "root";
		String PASSWORD = "mysql";
		
		try {
			Class.forName(JDBC_DRIVER);
			
			Connection conn = DriverManager.getConnection(DB_URL, USER, PASSWORD);
			Statement stat = conn.createStatement();
			stat.executeUpdate("INSERT INTO users VALUES(\"" + name + "\",\"" 
					+ email + "\",\""
					+ password + "\",\"" + city + "\",\"" + state + "\",\"" +
					gender + "\"," + promo + ");");
			conn.close();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 
	}

}
