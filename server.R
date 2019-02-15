# Define server logic for random distribution app ----
server <- function(input, output) {

  observeEvent(input$loadDataButton, {
    print(input$authTokenInput)
    #print(100)
    #stopApp(returnValue)
  })
}