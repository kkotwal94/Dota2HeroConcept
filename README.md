# Dota2HeroConcept
To create a dota2 hero concept webapp

# Database model ideas:
#User
{
  ID
   profile {
     firstname
     lastname
     DOB
     Email
     passwordHash
   }
   posts 
   comments
   heroCreated
}

#Posts
{
Owner
Date
Title
Content
heroPosted
Upvotes/Likes
Downvotes/Dislikes
}

#Comments
{
Owner
Date
ExistsInPost
CreatedBy
SubComments
Content
Upvotes/Likes
Downvotes/Dislikes
}

#HeroConcept
Owner : ref: User
Date
Skills[1,2...3..4...5...6...]
TypeOfHero [Int, Strength, Agillity]
isMeleeOrRanged [Melee, Ranged]
HeroName
HeroTitle
HeroPortrait
HeroModel
HeroAnimations
HeroLore
HeroStats {
   Agillity
   Strength
   Intelligence
   }
