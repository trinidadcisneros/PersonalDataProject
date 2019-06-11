<h1>Project:</h1>
<ul>
<<<<<<< HEAD
<li> A web-based tool to help individuals moving into the restaurant space gain market entry issues they may face in LA: primarily the competition, market size, the price ranges, and eventually, use machine learning techniques to point out restaurant features that result in success (restaurant lifecycle, customer reviews, price optimization etc).
=======
<li> A web-based consultation tool that provides restaurants business intelligence, in particular, competition.  The customer demographics would be new restaurants, and partities interested in market entry issues, and the general restaurant industry in a given area. In this project, LA is used as a pilot, where the following measures will be analyze:  competition, market size, and average price of meals for 2 individuals.  In the future, we would provide a machine learning element to point out restaurant features that are assocaited with success (restaurant lifecycle, customer reviews, price optimization etc), so that these can be used as models for new restaurants.
>>>>>>> 3f4b46b3665768faa3ba06f990fd1efdfa40311e
</ul>

<strong>Project Objectives:</strong>
<ul>
<li> Allow users to geophracially visualize the restaurant lanscape in LA</li>
<li> Allow users to filter landscape by the cuisine category (American, Chinese, Breakfast, Mexican, etc)</li>
<li> Allow users to view the average price distribution (mean meals for 2) for all restaurants in a given cuisine category.</li>
</ul>

<Strong>Dataset Sournce:</strong>
<ul>
<li>Dataset: https://developers.zomato.com</li>
<li>API: https://developers.zomato.com/api</li>
</ul>


<strong>Group Members:</strong> 
<ul>
<li>Xuyang</li>
<li>Ramon</li>
<li>Mengjia</li>
<li>Trinidad</li>
</ul>

<Strong>Methods (Developer Mode):</strong>
<h2>RestaurantNew folder</h2>
<h2>Run the Extract and Load jn file (Jupyter Notebook)</h2>
<h2>Extract Data</h2>
<ul>
<li>API call to extract the restaurant dataset: extract_transform_restaurant_dict.ipynb</li>
<li>Connect to Mysql, create db, and tables, and load data using sqlalchemy: load_data_to_mysqyl.ipynb</li>
</ul>
<h2>Load and Update Dashboard interface</h2>
<ul>
<li>Current Flask endpoints: app.py</li>
  <ul>
    <li>@app.route("/"): renders template</li>
    <li>@app.route("/restaurants"): gets names of restaurants</li>
    <li>@app.route("/cuisine_categories"): gets the list of cuisine categories</li>
  </ul>
<li>Final Flask endpoints</li>
<ul>
  <li>@app.route("/"): renders template with default plot for all restaurants (unfiltered)</li>
  <li>@app.route("/cuisine_categories"): updates all plots when a cuisine category is selected from downdown menu</li>
  <li>@app.route("/location"): plots restaurants using geographical rendering tools. Data structure: dictionary of json entries</li>
  <li>@app.route("/bubble_plot"): plots the average price for 2 individuals versus rating for a given cuisine category. Data structure: dictionary of json entries</li>
</ul>
</ul>
<li>Javascript file: app.js</li>
<li>webpage: index.html: template from the belly button homework assignment</li>
  
<<<<<<< HEAD
=======

>>>>>>> 3f4b46b3665768faa3ba06f990fd1efdfa40311e
