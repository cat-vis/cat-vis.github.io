const userDefinedAuthorizedTags = {
	"contribution:technique": {
		"description": "The paper introduces a specific technique or system for visualising categorical data."
	},
	"contribution:evaluation": {
		"description": "The paper provides an empirical, algorithmic or theoretical evaluation of visualisation approaches for categorical data."
	},
	"contribution:ordering_algorithm": {
		"description": "The paper contributes an algorithm for rearranging categorical data."
	},
	"contribution:framework": {
		"description": "The paper contributes a framework or paradigm for visualising categorical data."
	},
	"contribution:survey": {
		"description": "The paper presents a survey of categorical data visualisation or a related field."
	},
	"contribution:textbook": {
		"description": "A textbook on the topic of categorical data visualisation."
	},
	"family:size-encoding": {
		"description": "The technique uses bars (line marks) with the length channel, or wedges (area marks) with the angle or length channels."
	},
	"family:space-filling": {
		"description": "The technique fills the available space and likely imposes a hierarchy of variables."
	},
	"family:glyph": {
		"description": "The technique uses glyphs or icons to represent individual items or aggregates in the dataset."
	},
	"family:table": {
		"description": "The technique represents data in a 2D table or matrix, where each cell contains visual encodings."
	},
	"family:projection": {
		"description": "The technique converts categories into numerical values before representing these visually (in line with the QuantViz approach)."
	},
	"family:other": {
		"description": "The technique represents frequencies (unlike projection techniques) but does not clearly belong to any of the other categories."
	},
	"family:not_applicable": {
		"description": "The paper does not describe a technique."
	},
	"data_type:homogeneous": {
		"description": "The technique only supports categorical (not quantitative) data."
	},
	"data_type:heterogeneous": {
		"description": "The technique supports a mixture of categorical and quantitative data."
	},
	"data_type:not_applicable": {
		"description": "Not applicable."
	},
	"dimensionality:univariate": {
		"description": "The technique supports only one categorical variable."
	},
	"dimensionality:bivariate": {
		"description": "The technique supports up to (or exactly) two categorical variables."
	},
	"dimensionality:trivariate": {
		"description": "The technique supports up to (or exactly) three categorical variables."
	},
	"dimensionality:multivariate": {
		"description": "The technique can support more than three categorical variables."
	},
	"dimensionality:not_applicable": {
		"description": "The paper does not describe a technique."
	},
	"cardinality:very_low": {
		"description": "The technique requires at least one binary variable; that is, a variable with only two categories."
	},
	"cardinality:low": {
		"description": "The technique supports variables with roughly (only) 2-5 categories."
	},
	"cardinality:moderate": {
		"description": "The technique can handle at least one variable with 6-10 categories."
	},
	"cardinality:high": {
		"description": "The technique is designed to support at least one variable with 10-99 categories."
	},
	"cardinality:very_high": {
		"description": "The technique is designed to support at least one variable with 100+ categories."
	},
	"cardinality:not_applicable": {
		"description": "The paper does not describe a technique."
	},
	"alignment:linear": {
		"description": "The technique arranges data along perpendicular or parallel axes."
	},
	"alignment:radial": {
		"description": "The technique is laid out in elliptical form and likely uses polar coordinates."
	},
	"alignment:other": {
		"description": "The technique does not use a linear or radial layout (e.g., force-directed)."
	},
	"alignment:not_applicable": {
		"description": "The paper does not describe a technique."
	},
	"projection_transformation": {
		"description": "The projection technique proposes an algorithm for converting categories into numbers."
	},
	"projection_representation": {
		"description": "The projection technique proposes a new visualisation technique for representing numerical values derived from categories."
	}
}