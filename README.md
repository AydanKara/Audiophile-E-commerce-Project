<h1>Audiophile E-Commerce Platform</h1>
<p>Audiophile is a cutting-edge e-commerce platform developed as a Single Page Application (SPA) using React.js, dedicated to offering an unparalleled online shopping experience for high-end audio enthusiasts. The project utilizes the SoftUni Practice Server, a REST service created for educational purposes, to manage backend operations.</p>
<br>

<h2>Description</h2>
<p>Audiophile showcases a carefully curated selection of premium headphones, earphones, speakers, and audio accessories. The platform is designed to deliver the best in audio technology, featuring a user-friendly interface and a rich set of functionalities catering to both guests and registered users.</p>

<br>

<h2>Back-End</h2>

<li>SoftUni Practice Server - REST service, created for educational purposes.</li>
<br>

[SoftUni Practice Server - Documentation](https://github.com/softuni-practice-server/softuni-practice-server/blob/master/README.md)

<br>

<h2>Front-End</h2>

<li>ReactJS - For building the user interface.</li>
<li>HTML & CSS - For structuring and styling the application.</li>

<br>

<h2>Functionality</h2>

<h3>Guest View</h3>
<p>:heavy_check_mark: Home Page: Welcome visitors with a brief introduction and featured products.</p>
<p>:heavy_check_mark: Catalog: Browse the complete list of available products.</p>
<p>:heavy_check_mark: Details Page: View detailed information about each product (functional activities like purchase and comments are restricted).</p>
<p>:heavy_check_mark: Contact Page: Reach out to the Audiophile team.</p>
<p>:heavy_check_mark: Register Page: Create a new user account.</p>
<p>:heavy_check_mark: Login Page: Access the private user area.</p>

<br>

<h3>Logged User View</h3>
<p>:heavy_check_mark: Home Page: Access the personalized home view.</p>
<p>:heavy_check_mark: Catalog: Browse and interact with the product catalog.</p>
<p>:heavy_check_mark: Details Page: View detailed product information and engage in functional activities.</p>
<p>:heavy_check_mark: Contact Page: Communicate with the Audiophile team.</p>
<p>:heavy_check_mark: Create Page: Add new products to the catalog.</p>
<p>:heavy_check_mark: Profile Page: Manage personal information and view user activities.</p>
<p>:heavy_check_mark: Logout: Securely log out of the application.</p>

<h4>Additional Features for Logged-In Users:</h4>

<ul>
&#x1F5F8 Create Products: Registered users can create new product entries and submit requests to the REST API.<br>
&#x1F5F8 Edit/Delete Products: Product authors can edit or delete their own products. <br>
&#x1F5F8 Interact with Products: Non-authors can like products and add them to their cart.<br>
&#x1F5F8 Comment on Products: Logged-in users can leave comments on product pages.<br>
</ul>

<br>

<h2>Starting the app locally</h2>

<h3>To run the application on your local machine, follow these steps:</h3>

1. Clone the repository:
```bash
git clone https://github.com/AydanKara/Audiophile-E-commerce-Project.git
```
2. Start the Backend Server: <br>
   2.1 Open a terminal and navigate to the server directory
   ```bash
   cd server
   ```
   2.2 Start the server
   ```bash
   node server.js
   ```

3. Start the Frontend: <br>
    3.1 Open another terminal and navigate to the client directory
   ```bash
   cd client
   ```
   3.2 Install dependencies
    ```bash
   npm install
    ```
   3.3 Start the development server
    ```bash
    npm run dev
    ```

<h3>And you are ready to go!</h3>
