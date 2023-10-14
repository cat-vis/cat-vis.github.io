const userDefinedAuthorizedTags = {
	"contribution:technique": {
		"description": "the paper introduces a specific technique or system for visualising categorical data"
	},
	"contribution:evaluation": {
		"description": "the paper provides an empirical, algorithmic or theoretical evaluation of visualisation approaches for categorical data"
	},
	"contribution:framework": {
		"description": "the paper contributes a framework or paradigm for thinking about categorical visualisation"
	},
	"contribution:survey": {
		"description": "the paper synthesises numerous techniques for visualising categorical data"
	},
	"contribution:tool": {
		"description": "the paper describes software that instantiates one or more categorical visualisation techniques"
	},
	"contribution:application": {
		"description": "the paper applies categorical data to a specific application"
	},
	"contribution:textbook": {
		"description": "a textbook or monograph on the topic of visualising categorical data"
	},
	"family:bar": {
		"description": "the technique is closely related to, or derived from, the classic bar chart"
	},
	"family:radial": {
		"description": "the technique is laid out in circular or elliptical form; it uses the polar coordinate system rather than Cartesian coordinates"
	},
	"family:mosaic": {
		"description": "the technique is supported by Meyer et al.’s ‘vcd’ package and ‘strucplot’ framework; commonalities include the use of area to encode frequency and other visual channels (e.g. colour) to highlight statistical attributes and display hierarchical conditional flat tables"
	},
	"family:tree": {
		"description": "the technique imposes a hierarchy on the variables displayed and uses area to represent frequency"
	},
	"family:glyph": {
		"description": "the technique uses icons to represent individual items in the dataset"
	},
	"family:table": {
		"description": "the technique represents data in a 2D table or matrix; the cells use visual encodings to enhance readability."
	},
	"family:projection": {
		"description": "the technique converts categories into numerical values before visualising them (aka ‘QuantViz’ or ‘intermediate representations’)"
	},
	"family:other": {
		"description": "the technique does not clearly belong to any of the other families"
	},
	"family:not_applicable": {
		"description": "the paper does not describe a technique"
	},
	"data_type:homogeneous": {
		"description": "the technique supports purely categorical data"
	},
	"data_type:heterogeneous": {
		"description": "the technique supports a mixture of categorical and continuous variables"
	},
	"data_type:not_applicable": {
		"description": "Not applicable"
	},
	"dimensionality:univariate": {
		"description": "the technique, as shown or described, supports only one categorical variable"
	},
	"dimensionality:bivariate": {
		"description": "the technique, as shown or described, supports up to two categorical variables"
	},
	"dimensionality:trivariate": {
		"description": "the technique, as shown or described, supports up to three categorical variables"
	},
	"dimensionality:multivariate": {
		"description": "the technique, as shown or described, can support more than three categorical variables"
	},
	"dimensionality:not_applicable": {
		"description": "the paper does not describe a technique"
	},
	"cardinality:low": {
		"description": "the technique supports variables with roughly 2-5 categories"
	},
	"cardinality:moderate": {
		"description": "the technique can handle at least one variable with 6-10 categories"
	},
	"cardinality:very_low": {
		"description": "the technique requires at least one binary variable; that is, a variable with only two categories"
	},
	"cardinality:high": {
		"description": "the technique is designed to support at least one variable with 10-100 categories"
	},
	"cardinality:very_high": {
		"description": "the technique is designed to support at least one variable with 100+ categories"
	},
	"cardinality:not_applicable": {
		"description": "the paper does not describe a technique"
	},
	"paper_type:full_paper": {
		"description": "a journal article, book chapter or full-length conference paper"
	},
	"paper_type:short_paper": {
		"description": "a short paper"
	},
	"paper_type:poster": {
		"description": "a poster submission"
	},
	"paper_type:other": {
		"description": "another type of publication, such as a book or technical report"
	}
}