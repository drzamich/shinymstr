library(shiny)

fluidPage(
  ## link the JS file
  tags$head(tags$script(src="script.js")),
  ## link the CSS file
  tags$head(tags$link(rel="stylesheet", 
                      type="text/css",
                      href="style.css")),
  
  ## non-reactive DOM manipulation
  h4('Non-reactive DOM Manipulation'),
  p('Logging changes in an input:'),
  textInput('txt1', 'Enter some text'),
  tags$div(id = 'placeholder1'),
  hr(),
  
  ## reactive DOM manipulation
  h4('Reactive DOM Manipulation'),
  p(paste('Inserting an input object after some', 
          'complicated JS calculation:')),
  tags$div(id = 'placeholder2'),
  tags$em((paste('Making sure it worked (type', 
                 'in the box above and see', 
                 'your result here):'))),
  textOutput('txt2Test', inline = TRUE),
  br(), br(), br()
)