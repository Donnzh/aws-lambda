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
	npmSearchResult: require("../assets/npmSearchResult.png"),
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
              AWS Lambda by different framworks
            </Heading>
						<Text textColor="black"> Donn Zhao</Text>
						<Text caps bold textColor="white"> backend team @ Channel 7</Text>

          </Slide>
					<Slide transition={["zoom"]} bgColor="primary">
							<Link href="https://github.com/Donnzh/lambda-example-by-different-frameworks">
								<Text caps textColor="white">example on Github</Text>
							</Link>
							<Image src={images.gitExample.replace("/", "")} margin="0px auto 40px" />

						</Slide>
          <Slide transition={["slide"]} bgColor="black" textColor="primary" notes="electronic receipts email, keep copy for finance department">
            <Image src={images.lambda.replace("/", "")} margin="0px auto 40px" height="293px"/>
						<List>
							<Appear><ListItem>'Serverless' : without provisioning or managing servers</ListItem></Appear>
							<Appear><ListItem>Deploy individual functions </ListItem></Appear>
							<Appear><ListItem>Code in response to events</ListItem></Appear>
							<Appear><ListItem>Pay only for the compute time:  no charge the code not running</ListItem></Appear>
						</List>
          </Slide>

					<Slide transition={["slide"]} bgColor="black" textColor="primary" notes="electronic receipts email, keep copy for finance department">
						<Image src={images.lambda.replace("/", "")} margin="0px auto 40px" height="293px"/>
						<List>
							<Appear><ListItem>USE CASE:</ListItem></Appear>
							<Appear><ListItem>infrequantly called functions</ListItem></Appear>
							<Appear><ListItem>upload files</ListItem></Appear>
							<Appear><ListItem>edm server</ListItem></Appear>
						</List>
					</Slide>


					<Slide transition={["slide"]} bgColor="primary" textColor="white" notes="You can even put notes on your slide. How awesome is that?">
					<Text margin="0px auto 20px" bold textColor="white">Apex</Text>
					<List>
					<Appear><ListItem> lightweight</ListItem></Appear>
					<Appear><ListItem> Command-line invokation </ListItem></Appear>
					<Appear><ListItem textSize= "40"> VPC, Function rollback </ListItem></Appear>

						<Appear><ListItem> Hook support</ListItem></Appear>
						<Appear><ListItem> node.js,golang,Python,Java</ListItem></Appear>
						<Appear><ListItem textColor="primary" ><Markdown textSize= "35">
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
					<Text margin="0px auto 20px" bold textColor="white">Claudia</Text>
					<List>
					<Appear><ListItem> lightweight</ListItem></Appear>
					<Appear><ListItem>  a deployment utility, instead of a framework </ListItem></Appear>
					<Appear><ListItem textSize= "40"> Command-line invokation </ListItem></Appear>

						<Appear><ListItem> node.js </ListItem></Appear>
						<Appear><ListItem textColor="primary" ><Markdown textSize= "35">
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
					<Text margin="0px auto 20px" bold textColor="white">Serverless</Text>
					<List>
					<Appear><ListItem> lambda framework</ListItem></Appear>
					<Appear><ListItem> also upload server to S3</ListItem></Appear>
					<Appear><ListItem> cloudwatch in console </ListItem></Appear>
						<Appear><ListItem> Built-in support for multiple stages.</ListItem></Appear>
						<Appear><ListItem> Extensible via Plugins</ListItem></Appear>
						<Appear><ListItem textSize= "40"> Functions can be grouped, shared packages </ListItem></Appear>
						<Appear><ListItem> Supports Node.js, Python, Java & Scala. </ListItem></Appear>

						<Appear><ListItem textColor="primary" ><Markdown textSize= "35">
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

					<CodeSlide
										transition={['fade']}
										lang="js"
										textSize="20px"
										code={require("raw!../assets/codeExample")}
										ranges={[
											{ loc: [0, 4], title: "pdfmake", note: "call the modules" },
											{ loc: [4, 10], title: "pdfmake", note: "Defined the pdf context" },
											{ loc: [11, 12] },

											{ loc: [12, 13], note: "It can output to write stream, no necessary to disk" },
											{ loc: [13, 14], note: "finish the output" }]}
					/>
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
