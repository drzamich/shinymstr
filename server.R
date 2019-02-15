# Define server logic for random distribution app ----
server <- function(input, output) {
  d <- reactive ({
    print(100)
    print(input$n)
  })
}