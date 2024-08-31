# News-Site

**News-Site** is a dynamic web application built with Django that provides users with up-to-date news headlines from various sources. This project leverages the powerful NewsAPI to fetch and display the latest news, making it easy for users to stay informed on current events. The site is designed with a modern, visually appealing Neumorphism UI, enhancing the user experience.

## Features

- **Real-Time News Updates**: Fetches and displays the latest news headlines from various categories and sources.
- **User-Friendly Interface**: Designed with Neumorphism UI to provide a modern and clean look, enhancing readability and navigation.
- **Customizable Backend**: Easily modify the sources and categories of news through the Django admin panel.

## Screenshots

![Screenshot 1](https://cdn.discordapp.com/attachments/1276824488398422110/1279355840616468570/news.png?ex=66d42479&is=66d2d2f9&hm=2bfe8c7a85c469c009a8ff16096cd3c95dc5ce693c8d8bd1c4e6f0d0702229b2&)

## API Used

This project utilizes the <a href="https://newsapi.org/" target="_blank">NewsAPI</a> to retrieve news data. 

> **Note:** An API key is required to use the NewsAPI. You can obtain your API key <a href="https://newsapi.org/register" target="_blank">here</a>. Once you have the key, place it inside `main/views.py` to enable the API integration.

## Hosted Site

Check out the live version of the News-Site <a href="https://newsflaskpyp.pythonanywhere.com" target="_blank">here</a>.

## Installation

To install and run the News-Site on your local machine, follow these steps:

1. **Clone the Repository**: Use `git clone` to download the project files.

```bash
git clone https://github.com/PyPranav/News-Site
```

2. **Set Up the Environment**: Ensure you have Python and Django installed on your machine. Create a virtual environment and activate it:

```bash
python -m venv env
source env/bin/activate  # On Windows, use `env\Scripts\activate`
```

3. **Install Dependencies**: Navigate to the project directory and install the required dependencies:

```bash
pip install -r requirements.txt
```

4. **Add Your API Key**: Place your NewsAPI key in the `main/views.py` file:

```python
# In main/views.py
API_KEY = 'your_api_key_here'
```

5. **Run the Server**: Start the Django development server to view the site locally:

```bash
python manage.py runserver
```

6. **Access the Site**: Open your web browser and go to `http://127.0.0.1:8000/news/` to view the site.

## CSS (Neumorphism UI)

The site’s design is based on the Neumorphism UI, which is a popular modern design trend that combines flat design with subtle, extruded shapes to create a soft, clean look. You can explore and customize this design further using resources from <a href="https://demo.themesberg.com/neumorphism-ui/" target="_blank">here</a>.

## Future Enhancements

- **Search Functionality**: Implement a search bar to allow users to search for specific news topics or keywords.
- **User Accounts**: Add user authentication to enable personalized news feeds based on user preferences.
- **Category Filters**: Allow users to filter news by different categories such as Technology, Sports, Entertainment, etc.


## Contributing

Contributions are welcome! If you have ideas for new features or improvements, please submit a pull request or open an issue to discuss your suggestions.
