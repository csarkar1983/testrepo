## CS 416 - UIUC - Narrative Visualization Final Project

UIUC CS 416 Final Project Essay By Chanchal Sarkar

About the Visualization

Messaging. What is the message you are trying to communicate with the narrative visualization?

This is a narrative visualization created for the CS 416 Data Visualization course. Overview: The above visualization utilizes the interactive slideshow narrative visualization technique, while incorporating hybrid elements of the drill-down technique. Each slide contains guidance on how to interact with the visualization. The structure of the slides guides users from one idea to the next, but there is still room for individual exploration at each stage. We accomplish visual consistency by maintaining uniform elements throughout, introducing a mixture of text, image and chart elements, and having meaningful colors.

This visualization assignment asks to find out top 5 countries with best world ranking universities and figure out the best 5 university name. Also, what are the factors which are correlated with best world ranking. While I was working on an apache superset dashboard project, I was planning to create a D3 visualization project to address the question in a story fashion for the viewers.

For example, teaching score and research score is very important for a world ranking but citation and international student percentage is that much important. To show the correlation I have created a scatter plot and show the +ve correlation.

Narrative Structure. Which structure was your narrative visualization designed to follow (martini glass, interactive slide show or drop-down story)? How does your narrative visualization follow that structure? (All of these structures can include the opportunity to "drill-down" and explore. The difference is where that opportunity happens in the structure.)

I have used interactive slideshow narrative visualization technique in addition with drill-down approach. So, we can say this is a hybrid structure of interactive slideshow and drill-down. I added 4 scenes (in the third scene I have added 4 sub-scenes) to show different countries to university count in a horizontal bar chart, including the top 5 countries threshold using a dotted line. In the second chart we drill-down to the top 5 countries by navigating the country wise dropdown to find out the best 5 universities by world ranking.

 
Visual Structure. What visual structure is used for each scene? How does it ensure the viewer can understand the data and navigate the scene? How does it highlight to urge the viewer to focus on the important parts of the data in each scene? How does it help the viewer transition to other scenes, to understand how the data connects to the data in other scenes?

I have followed a uniform visual structure for all the scenes. Each scene has 5 segments.
  a) First segment asks the question which the scene is trying to address.
  b) Second segment has the description how to narrate the story.
  c) Third segment is the SVG
  d) Fourth segment is the annotation which point out the observation of the SVG
  e) Fifth segment is the navigation to previous and next scene.

As I mentioned there is a question, a description how to view the SVG and an annotation for the observation, these will provide a clear message to the viewer what the purpose of this scene is, what is the story and summary of the story. I have provided a previous and next hyperlink to navigate to the previous and next scene.

I have used annotations in each of the scenes for summary and observations. Viewer can easily identify and cross-check the summary from the SVG. Also, I have used tooltips to provide more information to understand the scenes. In addition to that I have used highlighted dotted line to understand the threshold and correlations.

In the introduction page I have mentioned all the questions which we are going to address in each scene. In the description section of each scene, I have mentioned a note what we are going to view in the next scene. Also, I have used Next and Previous navigation in each scene.

Scenes. What are the scenes of your narrative visualization?  How are the scenes ordered, and why?

The scenes themselves are constructed via HTML id tags. Each scene has a unique id that is linked via the buttons. The “Next/Previous” buttons allow users to navigate from scene to scene independently, but the structure helps guide the overall narrative. Each scene is composed of a unique chart that highlights its own distinct message.

I have used a horizontal bar chart for the first scene. In this chart we have identified top five countries with top 200 ranking universities. The scene is properly annotated and has relevant tooltips.

Once we identified top 5 countries, next we will identify top three universities for each country in the second scene. I have used vertical bar chart to explore each country by the dropdown list. The scene is properly annotated and has relevant tooltips.

Once we addressed first two questions, next we will find the important factors which makes a university in top world ranking category. That’s why in the third scene we have used 4 scatterplots to explore 4 important factors - teaching score, research score, citation score and international student percentage. The scene is properly annotated and has relevant tooltips. Also, I have used highlighter to show the correlations.

The last chart I have used to address the final question related to "Do Female/Male ratio has impact on world ranking?". The scene is properly annotated and has relevant tooltips and clearly showing the female percentage correlation to the world ranking.

Annotations. What template was followed for the annotations, and why that template? How are the annotations used to support the messaging? Do the annotations change within a single scene, and if so, how and why?

Annotations remain consistent on the charts, even throughout changes triggered by the interactions. This allows the user to have some grounding on the overall message the visualization is trying to communicate.

Scene 1 - I have used annotation with note and connector. This annotation provides the summary of this scene. Also, I have used dotted line to mention the threshold. In addition to that I have used tooltips to show the country name and the total number of top 200 ranking universities.

Scene 2 - I have used annotation with note and connector. This annotation provides the summary of this scene. Also, I have used second annotation to mark the top 3 universities. In addition to that I have used tooltips to show the university name and the total score.

Scene 3 - I have used annotation with note and connector. This annotation provides the summary of this scene. Also, I have used dotted line to show the correlation line. In addition to that I have used D3 feature to highlight all the dots which defines same country with bigger circle and make all other dot smaller and faded. Lastly, I have used tooltips to show the country name.

Scene 4 - I have used annotation with note and connector. This annotation provides the summary of this scene. In addition to that I have used D3 feature to highlight all the university’s female percentage ratio with same world ranking category.

Based on the parameter the annotation changes in the same scene. As an example, in the second scene once you select different country, the annotation is would be reflected for the selected country only.

Parameters. What are the parameters of the narrative visualization? What are the states of the narrative visualization? How are the parameters used to define the state and each scene?

The visualizations have a handful of relevant parameters that help the user better explore the data. By interacting with JavaScript input features, such as the toggle buttons or the interactive legend in vis2, the user can choose to see data about a specific category, or even filter out the datapoints by hovering over world rank categories. The user input is used as a parameter that controls what the visualization portrays.

The below parameters have been used for this narrative visualization.
a)	Drop down list - In scene 2 user can change the parameters using the dropdown list. Based on the selected country using the dropdown, the entire SVG has been defined.
b)	World Ranking Category Legend - In scene 4, once user select a specific world rank category, the associated female percentage is highlighted.

Triggers. What are the triggers that connect user actions to changes of state in the narrative visualization? What affordances are provided to the user to communicate to them what options are available to them in the narrative visualization?

The triggers are implemented via events and callbacks, such as “mouseover”, “mouseout” and "onChange". When specific html elements experience these events, the callback function is invoked, and we can change the visualization with respect to the action indicated by the trigger. The example triggers we have here are the buttons and hovering legend.

1. Page navigation link: D3 code internally keep track of current scene location and call different APIs and different function with parameter to draw different chart. User can go to next page, previous page, back to top page and go to the specific question from intro section.

2. Hovering legend: Different legend category has been used to show the overing legend trigger.

3. “mouseover”, “mouseout” and "onChange" - Different tooltips has been constructed based on these triggers.

