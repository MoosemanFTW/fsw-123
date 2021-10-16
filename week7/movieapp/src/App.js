import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavorites from './components/AddFavorites';
import RemoveFavorites from './components/RemoveFavorites';
import HowToUse from './components/HowToUse';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [Favorites, setFavorites] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=469a611a`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	useEffect(() => {
		const movieFavorites = JSON.parse(
			localStorage.getItem('movie-app-Favorites')
		);

		if (movieFavorites) {
			setFavorites(movieFavorites);
		}
	}, []);

	const saveToLocalStorage = (items) => {
		localStorage.setItem('movie-app-Favorites', JSON.stringify(items));
	};

	const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...Favorites, movie];
		setFavorites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	const removeFavouriteMovie = (movie) => {
		const newFavouriteList = Favorites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);

		setFavorites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	return (
		<div className=''>
			<Router>
				<header className='header'>
					<Link to='/' className='links'>How to Use</Link>
					<Link to='/movies' className='links'>Search for movies</Link>
					<Link to='/Favorites' className='links'>Your favorite movies</Link>
				</header>
				<main>
					<Switch>
						<Route exact={true} path='/'>
							<HowToUse />
						</Route>
						<Route path='/movies'>
						<div className=''>
							<MovieListHeading heading='Movies' />
							<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
						</div>
						<div className='flex-box'>
							<MovieList
								movies={movies}
								handleFavoritesClick={addFavouriteMovie}
								favouriteComponent={AddFavorites}
							/>
						</div>
						</Route>
						<Route path='/Favorites'>
						<div className=''>
							<MovieListHeading heading='Favorites' />
						</div>
						<div className='flex-box'>
							<MovieList
								movies={Favorites}
								handleFavoritesClick={removeFavouriteMovie}
								favouriteComponent={RemoveFavorites}
							/>
						</div>
						</Route>
					</Switch>
				</main>
			</Router>
		</div>
	);
};

export default App;
