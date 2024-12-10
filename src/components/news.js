import React, { Component } from 'react';
import NewsComp from './newsComp';
import Spinner from './spinner';
import PropTypes from 'prop-types';

export class News extends Component {
    static defaultProps = {
        country: 'us',
        pageSize: 18,
        category: 'general',
    };

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    };

    constructor(props) {
        super(props);
        this.state = {
            articles: [], // Initialize as an empty array
            page: 1,
            loading: false,
            totalResults: 0,
        };
    }

    async fetchNews(page) {
    const apiKey = process.env.REACT_APP_NEWS_API_KEY;
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // Use a public CORS proxy
    const targetUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${apiKey}&page=${page}&pageSize=${this.props.pageSize}`;
    const url = `${proxyUrl}${targetUrl}`;

    console.log("Fetching news from:", url);

    if (!apiKey) {
        console.error("API key is not defined. Please set REACT_APP_NEWS_API_KEY in the .env file.");
        this.setState({ articles: [], loading: false });
        return;
    }

    try {
        this.setState({ loading: true });

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const parsedData = await response.json();
        this.setState({
            articles: parsedData.articles || [],
            totalResults: parsedData.totalResults || 0,
            loading: false,
        });
    } catch (error) {
        console.error('Error fetching the news:', error);
        this.setState({
            articles: [],
            loading: false,
        });
    }
}



    componentDidMount() {
        this.fetchNews(this.state.page);
    }

    handleNextPage = () => {
        if (this.state.page < Math.ceil(this.state.totalResults / this.props.pageSize)) {
            this.setState(
                (prevState) => ({ page: prevState.page + 1 }),
                () => this.fetchNews(this.state.page)
            );
        }
    };

    handlePrevPage = () => {
        if (this.state.page > 1) {
            this.setState(
                (prevState) => ({ page: prevState.page - 1 }),
                () => this.fetchNews(this.state.page)
            );
        }
    };

    render() {
        const fallbackImage = `${process.env.PUBLIC_URL}/newspaper-design-template/18580.png`;

        return (
            <div className="container my-3">
                <div className="d-flex justify-content-start">
                    <h2>Headlines</h2>
                </div>
                {this.state.loading && <Spinner />}
                <div className="row mt-3">
                    {!this.state.loading &&
                        this.state.articles.map((element, index) => (
                            <div className="col-md-4 col-12 mt-3" key={index}>
                                <NewsComp
                                    title={element?.title ? element.title.slice(0, 45) : 'No Title Available'}
                                    description={element?.description ? element.description.slice(0, 88) : 'No Description Available'}
                                    urlToImage={element?.urlToImage || fallbackImage}
                                    url={element?.url || '#'}
                                    publishedAt={element?.publishedAt || 'Unknown Date'}
                                    author={element?.author || 'Unknown Author'}
                                />
                            </div>
                        ))}
                </div>
                <div className="d-flex justify-content-between my-4">
                    <button
                        type="button"
                        className="btn btn-dark"
                        onClick={this.handlePrevPage}
                        disabled={this.state.page <= 1}
                    >
                        Previous Page
                    </button>
                    <button
                        type="button"
                        className="btn btn-dark"
                        onClick={this.handleNextPage}
                        disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize)}
                    >
                        Next Page
                    </button>
                </div>
            </div>
        );
    }
}

export default News;
