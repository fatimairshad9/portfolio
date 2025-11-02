import React, { JSX } from "react";
import { useParams, Link } from "react-router-dom";
import { Typography, Divider } from "antd";

const { Title, Paragraph, Text } = Typography;

const blogs: Record<string, { title: string; date: string; content: JSX.Element }> = {
"api-integration": {
  title: "Integrating APIs in React — Clean Patterns and Error Handling",
  date: "October 22, 2024",
  content: (
    <>
      <Paragraph>
        Integrating APIs in React is one of the most essential skills for any developer — yet it’s
        also an area where messy code and poor error handling often appear. Whether you’re fetching
        user data, submitting a form, or updating information on the server, the way you structure
        your API logic has a huge impact on your app’s stability, scalability, and maintainability.
      </Paragraph>

      <Paragraph>
        In this guide, we’ll explore <Text strong>clean architecture patterns</Text> for managing API
        calls in React, along with <Text strong>proper error handling</Text> techniques that improve
        both the developer experience and user experience.
      </Paragraph>

      <Divider />

      <Title level={3}>1. The Wrong Way — Scattered API Calls Everywhere</Title>
      <Paragraph>
        Beginners often make the mistake of calling <code>fetch()</code> directly inside React
        components — sometimes even in multiple components that fetch the same data.
        This leads to duplicated code, inconsistent logic, and poor maintainability.
      </Paragraph>

      <pre
        style={{
          background: "#1e1e1e",
          color: "#f8f8f2",
          padding: "16px",
          borderRadius: "10px",
          overflowX: "auto",
          fontSize: "14px",
          marginBottom: "24px",
        }}
      >{`// ❌ Avoid this pattern
function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error("Failed to fetch users", err));
  }, []);

  return <UserList data={users} />;
}`}</pre>

      <Paragraph>
        This approach works for small demos, but once your app grows, it becomes hard to track errors
        or update endpoints consistently. A better approach is to <Text strong>centralize</Text> all
        API logic into one location.
      </Paragraph>

      <Divider />

      <Title level={3}>2. Use Service Files for APIs</Title>
      <Paragraph>
        A cleaner architecture involves creating a <Text strong>dedicated API service layer</Text> —
        a folder that stores all your HTTP requests in one place. This improves readability,
        consistency, and error handling across your app.
      </Paragraph>

      <pre
        style={{
          background: "#1e1e1e",
          color: "#f8f8f2",
          padding: "16px",
          borderRadius: "10px",
          overflowX: "auto",
          fontSize: "14px",
          marginBottom: "24px",
        }}
      >{`// ✅ src/services/userService.js
export const getUsers = async () => {
  try {
    const res = await fetch("/api/users");
    if (!res.ok) throw new Error("Error fetching users");
    return await res.json();
  } catch (error) {
    console.error("API Error:", error.message);
    throw error;
  }
};`}</pre>

      <Paragraph>
        Now you can simply import this function wherever needed:
      </Paragraph>

      <pre
        style={{
          background: "#1e1e1e",
          color: "#f8f8f2",
          padding: "16px",
          borderRadius: "10px",
          overflowX: "auto",
          fontSize: "14px",
          marginBottom: "24px",
        }}
      >{`import { getUsers } from "../services/userService";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then(data => setUsers(data))
      .catch(() => alert("Failed to load users"));
  }, []);

  return <UserList data={users} />;
}`}</pre>

      <Paragraph>
        This pattern keeps your React components focused on rendering logic, while your API calls
        live in a centralized, reusable module.
      </Paragraph>

      <Divider />

      <Title level={3}>3. Handle Errors Gracefully</Title>
      <Paragraph>
        Error handling isn’t just about using <code>try/catch</code> — it’s about providing clear
        feedback to users. A production-grade app should catch API errors and display friendly
        messages instead of leaving the user confused.
      </Paragraph>

      <Paragraph>
        Here’s an example using <code>Toast</code> or <code>Alert</code> components to notify users
        when something goes wrong:
      </Paragraph>

      <pre
        style={{
          background: "#1e1e1e",
          color: "#f8f8f2",
          padding: "16px",
          borderRadius: "10px",
          overflowX: "auto",
          fontSize: "14px",
          marginBottom: "24px",
        }}
      >{`import { message } from "antd";

const handleFetchUsers = async () => {
  try {
    const data = await getUsers();
    setUsers(data);
  } catch (error) {
    message.error("Unable to load users. Please try again later.");
  }
};`}</pre>

      <Paragraph>
        You can also create a custom hook like <code>useFetch</code> to standardize loading and error
        states across multiple components. This is especially powerful when working on larger React
        apps or dashboards.
      </Paragraph>

      <Divider />

      <Title level={3}>4. Bonus Tip — Abstract Common Logic with Custom Hooks</Title>
      <Paragraph>
        Instead of repeating the same loading/error handling in every component, you can abstract it
        using a reusable <code>useFetch</code> hook:
      </Paragraph>

      <pre
        style={{
          background: "#1e1e1e",
          color: "#f8f8f2",
          padding: "16px",
          borderRadius: "10px",
          overflowX: "auto",
          fontSize: "14px",
          marginBottom: "24px",
        }}
      >{`import { useState, useEffect } from "react";

export const useFetch = (apiFn) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiFn()
      .then(res => setData(res))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, [apiFn]);

  return { data, loading, error };
};`}</pre>

      <Paragraph>
        With this, your component logic becomes beautifully simple:
      </Paragraph>

      <pre
        style={{
          background: "#1e1e1e",
          color: "#f8f8f2",
          padding: "16px",
          borderRadius: "10px",
          overflowX: "auto",
          fontSize: "14px",
          marginBottom: "24px",
        }}
      >{`const { data: users, loading, error } = useFetch(getUsers);

if (loading) return <Spin />;
if (error) return <Alert message="Failed to fetch users" type="error" />;

return <UserList data={users} />;`}</pre>

      <Divider />

      <Title level={3}>💡 Final Thoughts</Title>
      <Paragraph>
        Clean API integration isn’t just about fetching data — it’s about building a maintainable
        structure that can scale. By keeping API logic separate, handling errors gracefully, and
        using custom hooks for reusability, your React codebase will remain efficient, organized,
        and professional.
      </Paragraph>
    </>
  ),
},

"react-mistakes": {
  title: "10 Common Mistakes Beginners Make in React (and How to Fix Them)",
  date: "October 18, 2024",
  content: (
    <>
      <Paragraph>
        React is one of the most popular libraries for building dynamic web applications, 
        but beginners often stumble upon similar issues when learning it. 
        Understanding these common mistakes can help you write cleaner, more efficient, and bug-free code.
      </Paragraph>

      <Title level={3}>1. Mutating State Directly</Title>
      <Paragraph>
        One of the most frequent mistakes beginners make is directly modifying the state instead of using the state updater function. 
        Direct mutation causes unexpected UI behavior because React won’t detect the change properly.
      </Paragraph>
      <pre
        style={{
          background: "#1e1e1e",
          color: "#f8f8f2",
          padding: "16px",
          borderRadius: "10px",
          overflowX: "auto",
          fontSize: "14px",
          marginBottom: "24px",
        }}
      >{`// ❌ Wrong
state.count = state.count + 1;

// ✅ Correct
setState(prev => ({ count: prev.count + 1 }));`}</pre>

      <Title level={3}>2. Missing Keys in Lists</Title>
      <Paragraph>
        When rendering lists in React, each item should have a <code>key</code> prop. 
        Missing or duplicate keys confuse React’s reconciliation process, causing unwanted re-renders or UI glitches.
      </Paragraph>
      <pre
        style={{
          background: "#1e1e1e",
          color: "#f8f8f2",
          padding: "16px",
          borderRadius: "10px",
          overflowX: "auto",
          fontSize: "14px",
          marginBottom: "24px",
        }}
      >{`// ❌ Wrong
{items.map(item => <li>{item.name}</li>)}

// ✅ Correct
{items.map(item => <li key={item.id}>{item.name}</li>)}`}</pre>

      <Title level={3}>3. Fetching Data Inside Render</Title>
      <Paragraph>
        Another classic mistake is calling APIs directly inside the render function. 
        This leads to infinite loops and performance issues. 
        React provides <code>useEffect</code> for handling side effects like fetching data.
      </Paragraph>
      <pre
        style={{
          background: "#1e1e1e",
          color: "#f8f8f2",
          padding: "16px",
          borderRadius: "10px",
          overflowX: "auto",
          fontSize: "14px",
          marginBottom: "24px",
        }}
      >{`// ❌ Wrong
function Users() {
  const users = fetch("/api/users").then(res => res.json());
  return <div>{users.length}</div>;
}

// ✅ Correct
function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return <div>{users.length}</div>;
}`}</pre>

      <Title level={3}>4. Not Splitting Components</Title>
      <Paragraph>
        Large components with too many responsibilities make your code harder to read and maintain.
        Always break your UI into smaller, reusable components.
      </Paragraph>

      <Title level={3}>5. Ignoring Prop Validation</Title>
      <Paragraph>
        Without prop validation, debugging becomes difficult. Use TypeScript or <code>PropTypes</code> to ensure 
        that your components receive the right data types.
      </Paragraph>

      <Paragraph>
        These are just a few of the most common pitfalls developers face. 
        Avoiding them early on will help you build more maintainable and predictable React applications.
      </Paragraph>

      <Paragraph strong style={{ marginTop: "24px" }}>
        💡 Pro Tip: Always read React warnings carefully — they often tell you exactly what went wrong and how to fix it!
      </Paragraph>
    </>
  ),
},

 "component-reusability": {
  title: "How I Improved My Component Reusability in React",
  date: "October 12, 2024",
  content: (
    <>
      <Paragraph>
        One of the most powerful concepts in React is <Text strong>reusability</Text>. 
        Instead of rewriting similar UI logic repeatedly, reusable components help 
        maintain consistency, speed up development, and reduce bugs across large applications.
      </Paragraph>

      <Title level={3}>1. Use Props Effectively</Title>
      <Paragraph>
        Props are the key to component reusability. 
        They allow you to create flexible, dynamic components without duplicating logic. 
        By designing your components to accept meaningful props, you can easily reuse the same component 
        for multiple use cases.
      </Paragraph>
      <pre
        style={{
          background: "#1e1e1e",
          color: "#f8f8f2",
          padding: "16px",
          borderRadius: "10px",
          overflowX: "auto",
          fontSize: "14px",
          marginBottom: "24px",
        }}
      >{`// ✅ Reusable Button Component
interface ButtonProps {
  label: string;
  type?: "primary" | "secondary";
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, type = "primary", onClick }) => {
  return (
    <button className={\`btn btn-\${type}\`} onClick={onClick}>
      {label}
    </button>
  );
};

// Usage
<Button label="Save" type="primary" onClick={handleSave} />
<Button label="Cancel" type="secondary" onClick={handleCancel} />`}</pre>
      <Paragraph>
        Here, the same <code>Button</code> component is reused in multiple contexts — 
        only the props change. This prevents repetitive code and promotes maintainability.
      </Paragraph>

      <Title level={3}>2. Abstract Common Logic with Custom Hooks</Title>
      <Paragraph>
        If you notice repeated logic inside your components, such as data fetching, form handling, 
        or event tracking — move it into a <Text strong>custom hook</Text>. 
        This not only makes components simpler but also helps maintain a consistent logic structure across your app.
      </Paragraph>

      <pre
        style={{
          background: "#1e1e1e",
          color: "#f8f8f2",
          padding: "16px",
          borderRadius: "10px",
          overflowX: "auto",
          fontSize: "14px",
          marginBottom: "24px",
        }}
      >{`// ✅ Example: Custom Data Fetching Hook
import { useState, useEffect } from "react";

export const useFetch = (url: string) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
};`}</pre>

      <Paragraph>
        Now, you can use <code>useFetch</code> anywhere in your components to fetch data 
        without repeating the same logic — keeping your code <Text strong>clean, testable,</Text> and <Text strong>reusable</Text>.
      </Paragraph>

      <Title level={3}>3. Create a Shared Components Folder</Title>
      <Paragraph>
        Store all reusable components (like buttons, modals, inputs, cards, etc.) 
        in a <code>/components/common</code> or <code>/ui</code> folder. 
        This makes your project structure more organized and promotes collaboration within teams.
      </Paragraph>

      <Paragraph>
        Reusability is not about creating a single “perfect” component, 
        but about identifying patterns and keeping your UI system modular. 
        Once you start reusing components and logic effectively, 
        your development speed increases, and your codebase remains consistent and scalable.
      </Paragraph>

      <Paragraph strong style={{ marginTop: "24px" }}>
        💡 Pro Tip: Think of components like LEGO blocks — 
        the smaller and more flexible they are, the more powerful your React applications become.
      </Paragraph>
    </>
  ),
},
"postman-tips": {
  title: "Postman Tips Every QA Engineer Should Know",
  date: "October 30, 2024",
  content: (
    <>
      <Paragraph>
        <Text strong>Postman</Text> is one of the most powerful tools in a QA engineer’s toolkit. 
        It helps you test APIs, automate workflows, and debug integration issues effectively. 
        Whether you're performing manual testing or preparing for automation, mastering Postman 
        can make your work faster and more efficient.
      </Paragraph>

      <Title level={3}>1. Use Collections to Organize Your Requests</Title>
      <Paragraph>
        Instead of creating random requests, use <Text strong>Collections</Text> to group 
        related API calls together. For example, keep all authentication APIs in one folder 
        and all CRUD operations in another. This helps maintain clarity and structure across 
        large projects.
      </Paragraph>

      <pre
        style={{
          background: "#1e1e1e",
          color: "#f8f8f2",
          padding: "16px",
          borderRadius: "10px",
          overflowX: "auto",
          fontSize: "14px",
          marginBottom: "24px",
        }}
      >{`Example Collection:
📁 Authentication
   ├── POST /login
   ├── POST /register
📁 Users
   ├── GET /users
   ├── POST /users
   ├── DELETE /users/:id`}</pre>

      <Title level={3}>2. Use Environment Variables</Title>
      <Paragraph>
        Instead of hardcoding URLs, tokens, or IDs, store them in 
        <Text strong> Environment Variables</Text>. 
        This allows you to switch between environments (like development, staging, and production) 
        without editing each request.
      </Paragraph>

      <pre
        style={{
          background: "#1e1e1e",
          color: "#f8f8f2",
          padding: "16px",
          borderRadius: "10px",
          overflowX: "auto",
          fontSize: "14px",
          marginBottom: "24px",
        }}
      >{`{{base_url}}/api/users
Authorization: Bearer {{auth_token}}`}</pre>

      <Paragraph>
        This approach improves reusability and prevents accidental exposure of sensitive data.
      </Paragraph>

      <Title level={3}>3. Write Tests in Postman</Title>
      <Paragraph>
        Postman allows you to write simple <Text strong>JavaScript-based tests</Text> 
        to validate responses automatically. You can check status codes, response times, 
        and field values within your requests.
      </Paragraph>

      <pre
        style={{
          background: "#1e1e1e",
          color: "#f8f8f2",
          padding: "16px",
          borderRadius: "10px",
          overflowX: "auto",
          fontSize: "14px",
          marginBottom: "24px",
        }}
      >{`pm.test("Status code is 200", function () {
  pm.response.to.have.status(200);
});

pm.test("User data is present", function () {
  var jsonData = pm.response.json();
  pm.expect(jsonData.name).to.eql("Fatima Irshad");
});`}</pre>

      <Paragraph>
        These quick tests help you ensure API stability and prevent regressions during updates.
      </Paragraph>

      <Title level={3}>4. Automate Workflows with Pre-request Scripts</Title>
      <Paragraph>
        You can automate token generation or dynamic data creation using 
        <Text strong> Pre-request Scripts</Text>. 
        This saves time and ensures consistency when running multiple requests that depend on each other.
      </Paragraph>

      <pre
        style={{
          background: "#1e1e1e",
          color: "#f8f8f2",
          padding: "16px",
          borderRadius: "10px",
          overflowX: "auto",
          fontSize: "14px",
          marginBottom: "24px",
        }}
      >{`// Example: Auto-set current timestamp before request
pm.environment.set("current_time", new Date().toISOString());`}</pre>

      <Title level={3}>5. Use Postman Runner for Bulk Testing</Title>
      <Paragraph>
        The <Text strong>Collection Runner</Text> allows you to execute multiple requests 
        in sequence with different datasets (from a CSV or JSON file). 
        This is especially useful for testing multiple scenarios or validating API performance.
      </Paragraph>

      <Paragraph>
        You can also export the results for reporting — a great feature for QA automation workflows.
      </Paragraph>

      <Title level={3}>6. Monitor APIs Over Time</Title>
      <Paragraph>
        Postman Monitors let you schedule tests to run automatically at intervals. 
        They alert you if your API starts failing, making them perfect for continuous QA monitoring.
      </Paragraph>

      <Paragraph strong style={{ marginTop: "24px" }}>
        💡 Pro Tip: Combine Postman with Newman (CLI tool) to integrate your API tests 
        directly into CI/CD pipelines for full automation.
      </Paragraph>

      <Paragraph>
        By mastering these Postman features, you’ll be able to perform faster, more accurate API testing — 
        and bring professional-level efficiency to your QA process.
      </Paragraph>
    </>
  ),
},
"qa-chrome-extensions": {
  title: "Top 10 Chrome Extensions for QA Testers",
  date: "November 1, 2024",
  content: (
    <>
      <Paragraph>
        A great QA engineer not only knows how to test software manually or through automation
        but also leverages the right <Text strong>browser extensions</Text> to boost efficiency.
        Chrome offers powerful tools that make testing, debugging, and validation faster and easier.
        Here are the top 10 Chrome extensions every QA tester should know.
      </Paragraph>

      <Title level={3}>1. Postman Interceptor</Title>
      <Paragraph>
        If you use Postman, <Text strong>Postman Interceptor</Text> allows you to capture 
        requests and cookies directly from your browser without needing a proxy.
        It helps you debug authentication, session handling, and API calls in real time.
      </Paragraph>

      <Title level={3}>2. XPath Helper</Title>
      <Paragraph>
        XPath Helper makes it easy to extract, test, and refine XPath queries for automation.
        Simply open the extension, hover over the element, and it provides the exact XPath 
        — saving time when writing Selenium or Playwright scripts.
      </Paragraph>

      <Title level={3}>3. JSON Viewer</Title>
      <Paragraph>
        Raw JSON responses are hard to read. <Text strong>JSON Viewer</Text> formats them beautifully 
        with color-coding and indentation. It’s perfect for checking API responses while testing integrations.
      </Paragraph>

      <Title level={3}>4. Bug Magnet</Title>
      <Paragraph>
        <Text strong>Bug Magnet</Text> provides predefined test inputs (like special characters, long strings, etc.)
        for form fields. It’s extremely useful for discovering edge cases and input validation issues.
      </Paragraph>

      <Title level={3}>5. WAVE Accessibility Evaluation Tool</Title>
      <Paragraph>
        Accessibility testing is often overlooked. The <Text strong>WAVE</Text> tool helps you evaluate 
        your web app for accessibility compliance — highlighting missing alt text, ARIA roles, and color contrast issues.
      </Paragraph>

      <Title level={3}>6. Lighthouse</Title>
      <Paragraph>
        <Text strong>Lighthouse</Text> (built by Google) audits performance, accessibility, SEO, and best practices.  
        It’s an essential extension for QA testers who also validate front-end quality and speed.
      </Paragraph>

      <Title level={3}>7. Page Ruler Redux</Title>
      <Paragraph>
        Need to check spacing or layout issues? <Text strong>Page Ruler Redux</Text> allows you to measure 
        pixel-perfect distances between elements, helping you spot UI inconsistencies quickly.
      </Paragraph>

      <Title level={3}>8. Window Resizer</Title>
      <Paragraph>
        Responsive design testing made simple! <Text strong>Window Resizer</Text> lets you resize your browser 
        to common device dimensions (mobile, tablet, desktop) in one click — great for cross-device testing.
      </Paragraph>

      <Title level={3}>9. Selector Gadget</Title>
      <Paragraph>
        Selector Gadget simplifies CSS selector extraction. Just click on an element, 
        and it automatically generates the minimal CSS selector — perfect for automation and web scraping tests.
      </Paragraph>

      <Title level={3}>10. Check My Links</Title>
      <Paragraph>
        This extension scans the webpage for broken links and highlights them instantly. 
        <Text strong>Check My Links</Text> is a must-have for QA testers validating website structure and navigation integrity.
      </Paragraph>

      <Paragraph strong style={{ marginTop: "24px" }}>
        💡 Pro Tip: Combine these extensions with DevTools and Postman to create a complete
        QA testing toolkit — covering UI, API, performance, and accessibility testing all in one browser.
      </Paragraph>

      <Paragraph>
        By mastering these Chrome extensions, QA testers can significantly improve their 
        <Text strong>speed, accuracy, and test coverage</Text> — making every QA cycle more productive and insightful.
      </Paragraph>
    </>
  ),
},


};

const BlogPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const blog = blogs[id || ""];

  if (!blog)
    return (
      <div
        style={{
          textAlign: "center",
          padding: "100px 20px",
          color: "#888",
          fontSize: "18px",
        }}
      >
        Blog not found.
        <div style={{ marginTop: 20 }}>
          <Link to= "#blogs" style={{ color: "#1677ff" }}>
            ← Back
          </Link>
        </div>
      </div>
    );

  return (
    <div
      style={{
        maxWidth: '100%',
        margin: "100px",
        padding: "40px 24px",
        background: "#fff",
        borderRadius: "16px",
        boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
      }}
    >
      <Link to="/" style={{ color: "#1677ff", fontSize: "15px" }}>
        ← Back
      </Link>

      <Title level={2} style={{ marginTop: 20, marginBottom: 10 }}>
        {blog.title}
      </Title>

      <Text type="secondary" style={{ fontSize: "15px" }}>
        {blog.date}
      </Text>

      <Divider />

      {blog.content}
    </div>
  );
};

export default BlogPage;
