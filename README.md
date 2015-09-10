# Dota2HeroConcept
To create a dota2 hero concept webapp, allow users to create their own heroes and upload their own pictures or avatars for that hero and their own skills

# Database model ideas:
#User
```
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
```
#Posts
```
{
Owner
Date
Title
Content
heroPosted
Upvotes/Likes
Downvotes/Dislikes
}
```
#Comments
```
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
```
#HeroConcept
```
{
Owner : ref: User
Date
Skills {
   {Skill1 : icon, description},
   {Skill2: icon, description},
   {Skill3: icon, description}
 }
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
}
```
