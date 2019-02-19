# Define server logic for random distribution app ----
server <- function(input, output) {

  observeEvent(input$loadDataButton, {
    print(input$authToken)
  })
  
  observeEvent(input$testButton, {
    # print(100) #testing
  })
}