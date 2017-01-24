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
					<List>
						<ListItem>R &amp; D</ListItem>
						<ListItem>
							<Text>"noBackend"</Text>
							<List>
								<ListItem>Less devops</ListItem>
								<ListItem>Deploy individual functions</ListItem>
								<ListItem>Pay per function call</ListItem>
							</List>
						</ListItem>
						<ListItem>
							<Text>Use case</Text>
							<List>
								<ListItem>infrequently called functions, e.g.</ListItem>
								<ListItem>VOD uploads</ListItem>
								<ListItem>sending emails</ListItem>
								<ListItem>generate PDF invoices</ListItem>
							</List>
						</ListItem>
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
					<Slide transition={["slide"]} bgColor="primary" textColor="white" notes="You can even put notes on your slide. How awesome is that?">
					<Text margin="0px auto 20px" bold textColor="white">Apex</Text>
					<List>
					<Appear><ListItem> lightweight</ListItem></Appear>
					<Appear><ListItem> Command-line invokation </ListItem></Appear>
					<Appear><ListItem textSize= "40"> VPC, Function rollback </ListItem></Appear>
						<Appear><ListItem> node.js,golang,Python,Java</ListItem></Appear>

					</List>
					</Slide>

					<Slide transition={["slide"]} bgColor="primary" textColor="white" notes="You can even put notes on your slide. How awesome is that?">
					<Text margin="0px auto 20px" bold textColor="white">Apex</Text>
					<List>
						<Appear><ListItem textColor="primary" ><Markdown textSize= "60">
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
						</Markdown></ListItem></Appear>

					</List>
					</Slide>
					<Slide transition={["slide"]} bgColor="primary" textColor="white" notes="You can even put notes on your slide. How awesome is that?">
					<Text margin="0px auto 20px" bold textColor="white">Apex</Text>
					<List>
					<Appear><ListItem> Command-line crediential setting </ListItem></Appear>
					<Appear><ListItem> moudles in each function</ListItem></Appear>
					<Appear><ListItem> function.json as config in each function </ListItem></Appear>
						<Appear><ListItem> no cloudwatch in console log </ListItem></Appear>

					</List>
					</Slide>

					<Slide transition={["slide"]} bgColor="primary" textColor="white" notes="You can even put notes on your slide. How awesome is that?">
					<Text margin="0px auto 20px" bold textColor="white">Claudia</Text>
					<List>
					<Appear><ListItem> lightweight</ListItem></Appear>
					<Appear><ListItem>  a deployment utility, instead of a framework </ListItem></Appear>
					<Appear><ListItem textSize= "40"> Command-line invokation </ListItem></Appear>
					<Appear><ListItem> node.js </ListItem></Appear>

					</List>
					</Slide>
					<Slide transition={["slide"]} bgColor="primary" textColor="white" notes="You can even put notes on your slide. How awesome is that?">
					<Text margin="0px auto 20px" bold textColor="white">Claudia</Text>
					<List>
						<Appear><ListItem textColor="primary" ><Markdown textSize= "65">
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
						</Markdown></ListItem></Appear>

					</List>
					</Slide>
					<Slide transition={["slide"]} bgColor="primary" textColor="white" notes="You can even put notes on your slide. How awesome is that?">
					<Text margin="0px auto 20px" bold textColor="white">Claudia</Text>
					<List>
					<Appear><ListItem> deployment utility tool, less import on project structure </ListItem></Appear>
					<Appear><ListItem> moudle files in each functions</ListItem></Appear>
					<Appear><ListItem> generate a role for each function when deploy </ListItem></Appear>
					<Appear><ListItem> heavily depends on Command-line config </ListItem></Appear>
					<Appear><ListItem> no cloudwatch in console log </ListItem></Appear>

					</List>
					</Slide>
					<Slide transition={["slide"]} bgColor="primary" textColor="white" notes="You can even put notes on your slide. How awesome is that?">
					<Text margin="0px auto 20px" bold textColor="white">Serverless</Text>
					<List>
					<Appear><ListItem> lambda framework</ListItem></Appear>
					<Appear><ListItem> upload server to S3</ListItem></Appear>
						<Appear><ListItem> Built-in support for multiple stages.</ListItem></Appear>
						<Appear><ListItem> Extensible via Plugins</ListItem></Appear>
						<Appear><ListItem> Supports Node.js, Python, Java & Scala. </ListItem></Appear>


					</List>
					</Slide>

					<Slide transition={["slide"]} bgColor="primary" textColor="white" notes="You can even put notes on your slide. How awesome is that?">
					<Text margin="0px auto 20px" bold textColor="white">Serverless</Text>
					<List>

						<Appear><ListItem textColor="primary" ><Markdown textSize= "85">
						{`
					my-server
									├── node_modules
									├── bar.js
									├── foo.js
									├── package.json
									├── serverless.yml

						`}
						</Markdown></ListItem></Appear>

					</List>
					</Slide>

					<Slide transition={["slide"]} bgColor="primary" textColor="white" notes="You can even put notes on your slide. How awesome is that?">
					<Text margin="0px auto 20px" bold textColor="white">Serverless</Text>
					<List>
					<Appear><ListItem> group functions </ListItem></Appear>
					<Appear><ListItem> yml config file for all </ListItem></Appear>
						<Appear><ListItem> functions share modules</ListItem></Appear>
						<Appear><ListItem> more flags in console commands </ListItem></Appear>
						<Appear><ListItem> cloudwatch in console log </ListItem></Appear>

					</List>
					</Slide>

					<Slide transition={["slide"]} bgColor="primary" textColor="white" notes="You can even put notes on your slide. How awesome is that?">
					<Text margin="0px auto 20px" bold textColor="white">Serverless</Text>
					<Appear><Markdown textSize= "85">
					{`
Feature | Apex | Serverless      | Cloudia
------- | ---------------- | ---------- | ---------:
Couldwatch log suport  | no | yes | no
Vpc setting in config file  | yes        | yes       | no
Functions share node modules   | no | yes     | no
Dynamic Reference config file | no        | yes       | no
Size |    lightweight     |        | lightweight
Plugin libraries |  yes    |    yes | yes
Support language|  go, node.js,     |  node.js, python | node.js
automates configuration tasks |  no    |    no | yes
					`}
					</Markdown></Appear>

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
