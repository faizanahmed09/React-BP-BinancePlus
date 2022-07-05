

import {
	createGlobalStyle
}

	from 'styled-components';
export const GlobalStyle = createGlobalStyle` 
html,
body {
	height: 100%;
	width: 100%;
}

body {
	font-family: "Poppins", sans-serif;
}

#root {
	min-height: 100%;
	min-width: 100%;
}



// Public Header Styles
header {
	width: 100%;
	.container-fluid {
		padding: 0;
	}
	.navbar-brand {
		max-width: 7.75rem;
		padding: 0;
	}
  .dropdown-menu {
	border: none;
    border-radius: 0.313rem;
	box-shadow: 0px 0px 7px 2px rgba(41,41,41,0.14);
    overflow: hidden;
    padding: 0;
    .dropdown-item {
      border-radius: 0;
      padding: 0.5rem 1rem;
      &:active {
        background-color: #f2b80e;
      }
    }
	.dropdown-divider {
		border-top: 1px solid rgb(177 177 177 / 15%);
	}
  }
  .dropdown-divider {
    margin: 0;
  }
}

.ph-bg {
	background-color: #000;
}

.ph-bg-tr {
	background-color: rgba(57, 57, 57, 0.25);
}

#public-header {
	//position: absolute;
	width: 100%;
	.navbar {
		padding: 1.65rem 0;
	}
	li {
		padding: 0.5rem 0.938rem;
		a {
			color: #fff;
			font-size: 16px;
			line-height: 24px;
			text-transform: uppercase;
		}
		a:hover {
			color: #f2b80e !important;
		}
	}
	img {
		max-width: 10rem;
	}
	.auth-link {
		button {
			display: block;
			font-size: 1rem;
			font-weight: 600;
			background: #f2b80e;
			color: #fff;
			border-radius: 6px;
			border: none;
			padding: 0.75rem 1.5rem;
		}
	}
	.navbar-toggler {
		padding: 0.25rem;
		&:focus {
			box-shadow: none;
			outline: none;
		}
		.navbar-toggler-icon {
			background: url(https://i.imgur.com/aZKcsWl.png) no-repeat;
			width: 2.125rem;
		}
	}
	.navbar-collapse {
		justify-content: flex-end;
	}
	@media (max-width: 1199px) {
		.navbar-collapse {
			/* background-color: #000; */
			padding: 1rem 0;
		}
		li {
			border-bottom: 1px solid #ffffff52;
			padding: 1rem 0;
		}
		.auth-link {
			margin: 1.5rem 0 0;
		}
	}
}

// Private NavBar
.for-hovr:hover path,
.for-hovr:active path {
	fill: #f2b80e;
}

.for-hovr:hover .user-cls,
.for-hovr:active .user-cls {
	color: #f2b80e;
}

.for-hovr:hover>.for-hovr-elemnt,
.for-hovr:active>.for-hovr-elemnt {
	color: #f2b80e;
}

.nav-cls {
	.anchor {
		background-color: transparent;
		border: none;
		color: white;
		margin: 0px 30px 0 0;
		font-size: 1.05rem;
		font-family: Poppins, sans-serif !important;
		font-weight: 400;
		padding: 0;
		&:hover,
		&:active,
		&:focus {
			box-shadow: none;
			color: #f2b80e;
			outline: none;
		}
	}
	a:hover,
	a:active,
	.for-hover:hover,
	.for-hover:active {
		color: #f2b80e;
	}
}

.private-header {
	background-color: #393939;
	.navbar {
		padding: 1.75rem 0;
	}
	.navbar-toggler {
		padding: 0.25rem;
		&:focus {
			box-shadow: none;
			outline: none;
		}
		.navbar-toggler-icon {
			background: url(https://i.imgur.com/aZKcsWl.png) no-repeat;
			width: 2.125rem;
		}
	}
	.navbar-collapse {
		justify-content: space-between;
		.navbar-nav {
			justify-content: center;
			width: 85%;
		}
		.account {
			li {
				list-style: none;
			}
		}
	}
	@media (max-width: 1199px) {
		.navbar-collapse {
			.navbar-nav {
				margin: 1rem 0 0;
				width: 100%;
				li {
					margin: 0 0 1rem;
				}
			}
		}
	}
}

.avatar {
	border-radius: 6px;
	width: 44px;
	height: 44px;
}

.user-cls {
	font-size: 14px;
	font-family: Roboto, sans-serif;
	font-weight: 700;
	color: white;
	width: 57px;
	word-wrap: break-word;
	margin: 0px 10px;
}

.nav-drop {
	.btn {
		display: flex;
		padding: 0 !important;
		background-color: transparent !important;
		border: 0px;
	}
	.btn:focus {
		box-shadow: 0px 0px 0px transparent;
	}
	.user-name {
		display: block;
		max-width: 10rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
}

// Public Footer Styles


// Home page / Main Section Component styles
#main-bg {
	//background:  url("https://i.imgur.com/ipeOwvR.png") no-repeat;
	background-size: cover;
	background-position: top;
	//height: 138vh;
	.content {
		align-items: flex-start;
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 138vh;
		
	}
	
	@media (max-width: 991px) {
		background-position: right;
	}
	
	@media (max-width: 767px) {
		height: 100vh;
		.content {
			align-items: center;
			text-align: center;
			height: 100vh;
			h4 {
				font-weight: 500;
				font-size: 1.125rem;
				height: auto;
				line-height: 28px;
			}
			h1 {
				font-size: 3rem;
				height: auto;
				line-height: 100px;
			}
			button {
				display: block;
				margin: 0 auto;
			}
		}
	}
	
	@media (max-width: 414px) {
		height: 120vh;
		.content {
			height: 120vh;
		}
	}
}


`;
