require.config({
	baseUrl: "/",
	paths: {
		"jquery": "libs/jquery-1.12.4",
		"tab": "module/tab",
		"toast": "module/toast",
		"template": "libs/template-web",
		"url": "module/url",
		"slide":"module/slide",
		"header":"module/header",
		"footer":"module/footer",
		"random":"module/random",
		"md5":"libs/md5",
		"cookie":"libs/jquery.cookie",
		"search":"module/search",
		"add":"module/add"
	},
	shim: {
		toast:{
			deps:["jquery"]
		},
		slide:{
			deps:["jquery"]
		},
		header:{
			deps:["jquery","cookie"]
		},
		footer:{
			deps:["jquery"]
		},
		random:{
			deps:["jquery"]
		},
		cookie:{
			deps:["jquery"]
		},
		search:{
			deps:["jquery","template"]
		},
		add:{
			deps:["jquery","cookie"]
		}
	}
})