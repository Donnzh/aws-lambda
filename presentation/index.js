// Import React
import React from "react";

// Import Spectacle Core tags
import {
	Appear,
	BlockQuote,
	Cite,
	CodePane,
	Deck,
	Fill,
	Heading,
	Image,
	Layout,
	Link,
	ListItem,
	List,
	Markdown,
	Quote,
	Slide,
	Spectacle,
	Text
} from "spectacle";
import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {

	lambda: require("../assets/lambda.jpg"),
	gitExample: require("../assets/gitExample.png"),

};

preloader({images});

const theme = createTheme({
  primary: "#50C878"
});

export default class Presentation extends React.Component {
	render() {
		return (
		<Spectacle theme={theme}>
			<Deck transition={["zoom", "slide"]} transitionDuration={500}>
				<Slide transition={["zoom"]} bgColor="primary">
					<Heading size={1} fit caps>
						AWS&lambda; Framework Comparison
					</Heading>
					<Text textColor="black">Donn Zhao &amp; Brendan Graetz</Text>
					<Text caps bold textColor="white">Backend Team @ Channel 7</Text>
				</Slide>
				<Slide>
					<Heading>Purpose</Heading>
					<Text>R &amp; D</Text>
				</Slide>
				<Slide>
					<Heading>Purpose</Heading>
					<Text>"noBackend"</Text>
					<List>
						<ListItem>Less devops</ListItem>
						<ListItem>Deploy individual functions</ListItem>
						<ListItem>Pay per function call</ListItem>
					</List>
				</Slide>
				<Slide>
					<Heading>Purpose</Heading>
					<Text>Use case</Text>
					<List>
						<ListItem>infrequently called functions, e.g.</ListItem>
						<ListItem>VOD uploads</ListItem>
						<ListItem>sending emails</ListItem>
						<ListItem>generate PDF invoices</ListItem>
					</List>
				</Slide>
				<Slide>
					<Heading>"Cowboy" devops</Heading>
					<Text>Classic edition:</Text>
					<List>
						<ListItem>ssh into production</ListItem>
						<ListItem>edit code</ListItem>
					</List>
				</Slide>
				<Slide>
					<Heading>"Cowboy" devops</Heading>
					<Text>AWS&lambda; edition:</Text>
					<List>
						<ListItem>log into AWS site</ListItem>
						<ListItem>edit code in website</ListItem>
					</List>
				</Slide>
				<Slide>
					<Heading>Pitfalls</Heading>
					<List>
						<ListItem>Version control?</ListItem>
						<ListItem>Rollback?</ListItem>
						<ListItem>Manage inter-function dependencies?</ListItem>
						<ListItem>CI/ CD?</ListItem>
					</List>
				</Slide>
				<Slide>
					<Heading>Tools</Heading>
					<List>
						<ListItem>Apex/ Serverless/ Claudia</ListItem>
						<ListItem>&#10003; git</ListItem>
						<ListItem>&#10003; manage inter-&lambda; dependencies</ListItem>
						<ListItem>&#10003; CI/ CD</ListItem>
						<ListItem>&#10060; testing</ListItem>
					</List>
				</Slide>
				<Slide>
					<Heading>Best practices</Heading>
					<List>
						<ListItem>&lambda; functions</ListItem>
						<ListItem>"regular" servers</ListItem>
					</List>
					<Text>Both should be subject to the same software engineering <strong>processes &amp; standards</strong></Text>
				</Slide>
				<Slide>
					<Heading>"Hello &lambda;"</Heading>
					<List>
						<ListItem>More than just "Hello World"</ListItem>
						<ListItem>get & set values in <strong>postgres</strong></ListItem>
						<ListItem>get & set values in <strong>redis</strong></ListItem>
						<ListItem>stateless functions <strong>&#10133;</strong> persistence <strong>&#61;</strong> API server</ListItem>
					</List>
				</Slide>
				<Slide>
					<Heading>Compare and contrast</Heading>
					<List>
						<ListItem>Frameworks: Apex. Serverless. Claudia.</ListItem>
						<ListItem>Development process</ListItem>
						<ListItem>Deployment process</ListItem>
						<ListItem>Configurability</ListItem>
						<ListItem>Coherence</ListItem>
					</List>
				</Slide>

				<Slide transition={["zoom"]} bgColor="primary">
						<Link href="https://github.com/Donnzh/lambda-example-by-different-frameworks">
							<Text caps textColor="white">example on Github</Text>
						</Link>
						<Image src={images.gitExample.replace("/", "")} margin="0px auto 40px" />
					</Slide>
					<Slide transition={["slide"]} bgColor="primary" textColor="white">
					<Text margin="0px auto 20px" bold textColor="white">Apex</Text>
					<List>
						<Appear><ListItem> Lightweight</ListItem></Appear>
						<Appear><ListItem> Command-line invocation </ListItem></Appear>
						<Appear><ListItem> Rollback </ListItem></Appear>
						<Appear><ListItem> Function config file: VPC, Role, Memory usage</ListItem></Appear>
						<Appear><ListItem> Supports Node.js, Golang, Python, Java</ListItem></Appear>
					</List>
				</Slide>

				<Slide transition={["slide"]} bgColor="primary" textColor="white">
					<Text margin="0px auto 20px" bold textColor="white">Apex</Text>
					<Markdown>
{`
	project.json
	functions
	├── bar
	│   ├── function.json
	│   └── index.js
	└── foo
		├── function.json
		└── index.js
`}
					</Markdown>
				</Slide>
				<Slide transition={["slide"]} bgColor="primary" textColor="white">
					<Text margin="0px auto 20px" bold textColor="white">Apex</Text>
					<List>
						<Appear><ListItem> Command-line credential setting </ListItem></Appear>
						<Appear><ListItem> node_modules in each function</ListItem></Appear>
						<Appear><ListItem> function.json as config in each function </ListItem></Appear>
						<Appear><ListItem> No CloudWatch log in console </ListItem></Appear>
					</List>
				</Slide>

				<Slide transition={["slide"]} bgColor="primary" textColor="white">
					<Text margin="0px auto 20px" bold textColor="white">Claudia</Text>
					<List>
						<Appear><ListItem> Lightweight </ListItem></Appear>
						<Appear><ListItem> Deployment utility, not a framework </ListItem></Appear>
						<Appear><ListItem textSize= "40"> Command-line invocation </ListItem></Appear>
						<Appear><ListItem> Supports Node.js </ListItem></Appear>
					</List>
				</Slide>
				<Slide transition={["slide"]} bgColor="primary" textColor="white">
					<Text margin="0px auto 20px" bold textColor="white">Claudia</Text>
					<Markdown >
{`
	functions
	├── bar
	│   ├── node_modules
	│   ├── claudia.json
	│   └── lambda.js
	│   └── package.json
	│
	└── foo
		├── claudia.json
		└── lambda.js
`}
					</Markdown>
				</Slide>
				<Slide transition={["slide"]} bgColor="primary" textColor="white">
					<Text margin="0px auto 20px" bold textColor="white">Claudia</Text>
					<List>
						<Appear><ListItem> Deployment utility tool, less impact on project structure </ListItem></Appear>
						<Appear><ListItem> node_modules per function</ListItem></Appear>
						<Appear><ListItem> Generates a role for each function when deployed </ListItem></Appear>
						<Appear><ListItem> Heavily depends on command-line config </ListItem></Appear>
						<Appear><ListItem> No CloudWatch logs in console </ListItem></Appear>
					</List>
				</Slide>

				<Slide transition={["slide"]} bgColor="primary" textColor="white">
					<Text margin="0px auto 20px" bold textColor="white">Serverless</Text>
					<List>
						<Appear><ListItem> Framework </ListItem></Appear>
						<Appear><ListItem> Upload code to S3 bucket </ListItem></Appear>
						<Appear><ListItem> Built-in support for multiple stges (environments). </ListItem></Appear>
						<Appear><ListItem> e.g. dev, production </ListItem></Appear>
						<Appear><ListItem> Extensible via Plugins </ListItem></Appear>
						<Appear><ListItem> Supports Node.js, Python, Java & Scala </ListItem></Appear>
						<Appear><ListItem> Largest community adoption </ListItem></Appear>
					</List>
				</Slide>
				<Slide transition={["slide"]} bgColor="primary" textColor="white">
					<Text margin="0px auto 20px" bold textColor="white">Serverless</Text>
					<Markdown>
{`
	my-server
		├── node_modules
		├── bar.js
		├── foo.js
		├── package.json
		├── serverless.yml
`}
					</Markdown>
				</Slide>

				<Slide transition={["slide"]} bgColor="primary" textColor="white">
					<Text margin="0px auto 20px" bold textColor="white">Serverless</Text>
					<List>
						<Appear><ListItem> Can have multiple functions in the same folder </ListItem></Appear>
						<Appear><ListItem> YAML config file for all </ListItem></Appear>
						<Appear><ListItem> Functions share node_modules </ListItem></Appear>
						<Appear><ListItem> More flags in console commands </ListItem></Appear>
						<Appear><ListItem> Has CloudWatch log in console </ListItem></Appear>

					</List>
					</Slide>

					<Slide transition={["slide"]} bgColor="primary" textColor="white">
					<Text margin="0px auto 20px" bold textColor="white">Lambda Frameworks</Text>
					<Markdown>
{`
Feature                       | Apex        | Serverless | Cloudia
-------                       | ----------- | ---------- | ---------:
Size                          | lightweight | heavy      | lightweight
Supports Node.js              | &#10003;    | &#10003;   | &#10003;
Other languages               | Go, Java    | Python, Java | -
Plugin libraries              | &#10003;    | &#10003;   | &#10003;
Couldwatch log suport         | &#10060;    | &#10003;   | &#10060;
Vpc setting in config file    | &#10003;    | &#10003;   | &#10060;
Functions share node modules  | &#10060;    | &#10003;   | &#10060;
Dynamic Reference config file | &#10060;    | &#10003;   | &#10060;
automates configuration tasks | &#10060;    | &#10060;   | &#10003;
`}
					</Markdown>

					</Slide>

          <Slide transition={["slide"]} bgColor="black">

            <BlockQuote>
              <Quote caps>Thanks</Quote>
            </BlockQuote>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
