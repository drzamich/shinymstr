library(shiny)

function(input, output, session) {
  ## To make sure our JS-created textInput works:
  output$txt2Test <- renderText({ input$txt2 })
}