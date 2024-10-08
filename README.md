# eConcerige web app

## Collaborators

- [William Sheere](https://github.com/WilliamSheere)
- [Adebanjo Fajemisin](https://github.com/AOF-O5-1)
- [Marvin Ortiz](https://github.com/ortizm13)
- [Sara Ryan](https://github.com/MadamLoki)

## Project Goals

```markdown
AS A USER traveler planning a trip,
I WANT an all-in-one platform for researching destinations, creating itineraries, collaborating with fellow travelers, managing my budget, and accessing reviews
SO THAT I can efficiently plan and organize my travel, make informed decisions, and have a stress-free, enjoyable trip.
```

### User Stories & Acceptance Criteria

1. Destinations

    - User Story:

        ```markdown
        AS A USER planning a trip,
        I WANT TO explore 10 potential travel destinations
        SO THAT I can find a location that match my preferences and start planning my journey
        ```

    - Acceptance Criteria:

        ```markdown
        GIVEN the user is on the landing page
        WHEN they click on a destination
        THEN a page presenting a range of information about the destination is shown
        
        GIVEN the user is on the destination page
        WHEN they access the page from different devices (desktop, tablet, mobile)
        THEN the interface is responsive and functional on all devices
        ```

2. Itinerary Creation

    - User Story:

        ```markdown
        AS A USER planning a trip,
        I WANT TO create and customize a detailed itinerary for my journey
        SO THAT I can organize my travel plans, visualize my trip timeline, and ensure I make the most of my time at each destination.
        ```

    - Acceptance Criteria:

        ```markdown
        GIVEN the user is on the itinerary creation page
        WHEN they enter trip dates and a destination
        THEN a new itinerary is created with a chronological format showing days and dates
        
        GIVEN the user has an open itinerary
        WHEN they add a destination, activity, or accommodation to a specific day
        THEN the item is added to the itinerary with relevant details (time, duration, location, notes)

        GIVEN the user has added locations to their itinerary
        WHEN they view the itinerary
        THEN estimated travel times between locations are displayed
        
        GIVEN the user has created an itinerary
        WHEN they choose to share it
        THEN they can send it to travel companions or export it in a printable format
        ```

3. Collaboration

    - User Story:

        ```markdown
        AS A USER traveler planning a group trip,
        I WANT TO invite friends or family members to collaborate on our travel itinerary
        SO THAT we can collectively plan our trip, ensuring everyone's preferences are considered and all trip details are easily accessible to the entire group.
        ```

    - Acceptance Criteria:

        ```markdown
        GIVEN a user has created an itinerary
        WHEN they invite others to collaborate by entering email addresses or sharing a link
        THEN the invited users receive access to view and edit the shared itinerary
        
        GIVEN a collaborator makes a change to the shared itinerary
        WHEN any user views the itinerary
        THEN the changes are visible, along with information about who made the change and when
        
        GIVEN collaborators are planning a trip
        WHEN they need to make a group decision
        THEN they can use the voting feature on proposed activities or destinations
        ```

4. Reviews and Recommendations

    - User Story:

        ```markdown
        AS A USER traveler planning a trip,
        I WANT TO read and leave reviews for destinations, hotels, and activities,
        SO THAT I can make informed decisions based on others' experiences and share my own insights to help fellow travelers.
        ```

    - Acceptance Criteria:

        ```markdown
        GIVEN a user is viewing a destination, hotel, or activity
        WHEN they scroll to the reviews section
        THEN they can see aggregated ratings and reviews from both user-generated content and external APIs
        
        GIVEN a user is looking at reviews
        WHEN they apply filters (e.g., rating, date, traveler type, keywords)
        THEN the reviews are updated to match the selected filters
        
        GIVEN a verified user has visited a destination or used a service
        WHEN they choose to leave a review
        THEN they can submit a rating, written description, and optional photos
        ```

5. Budgeting Tools

    - User Story:

        ```markdown
        AS A USER and a cost-conscious traveler planning a trip,
        I WANT TO manage and estimate my travel budget with integrated tools
        SO THAT I can plan my expenses effectively, stay within my financial limits, and make informed decisions about my travel choices.
        ```

    - Acceptance Criteria:

        ```markdown
        GIVEN a user is planning a new trip
        WHEN they access the budgeting tool
        THEN they can create a new budget, specifying the total amount and currency

        GIVEN a user has created a budget
        WHEN they input expenses
        THEN they can categorize them (e.g., accommodation, transportation, food, activities)

        GIVEN a user has created an itinerary and a budget
        WHEN they book accommodations, activities, or transportation through the app
        THEN these expenses are automatically added to the budget
        ```

- Potential Additional Features

    ```markdown
    - History of the area
    - Nightlife in the area
    - Travel checklist
    - Safety (Crime/Police/Hospital Rating)
    - Map integration to visualize itinerary locations.
    - Option to attach relevant documents (e.g., booking confirmations) to itinerary items.
    - Shared expense tracking for group trips.
    - Suggestion of budget-friendly alternatives for various travel components.
    ```
