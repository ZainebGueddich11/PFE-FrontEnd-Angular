import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { MenuComponent } from './menu/menu.component';
import { ProfilAdminComponent } from './profil-admin/profil-admin.component';
import { TableProfilComponent } from './table-profil/table-profil.component';
import { UserComponent } from './user/user.component';
import { Menu1Component } from './menu1/menu1.component';
import { CoursComponent } from './cours/cours.component';
import { ProfilUtilisateurComponent } from './profil-utilisateur/profil-utilisateur.component';
import { NotesComponent } from './notes/notes.component';
import { GeneralitesComponent } from './generalites/generalites.component';
import { TemplateComponent } from './template/template.component';
import { CourseGridComponent } from './course-grid/course-grid.component';
import { TeachersComponent } from './teachers/teachers.component';
import { TableModeratorComponent } from './table-moderator/table-moderator.component';
import { AuthGuardService } from './_services/auth-guard.service';
import { Menu2Component } from './menu2/menu2.component';
import { ProfilTuteurComponent } from './profil-tuteur/profil-tuteur.component';
import { ListeUtilisateurModComponent } from './liste-utilisateur-mod/liste-utilisateur-mod.component';
import { BadgesComponent } from './badges/badges.component';
import { CoursModComponent } from './cours-mod/cours-mod.component';
import { DocumentationComponent } from './module1/session1/documentation/documentation.component';
import { M1S2DComponent } from './module1/session2/m1-s2-d/m1-s2-d.component';
import { M1S3DComponent } from './module1/session3/m1-s3-d/m1-s3-d.component';
import { M1S4DComponent } from './module1/session4/m1-s4-d/m1-s4-d.component';
import { M1S5DComponent } from './module1/session5/m1-s5-d/m1-s5-d.component';
import { M1DevoirComponent } from './module1/m1-devoir/m1-devoir.component';
import { M2DevoirComponent } from './module2/m2-devoir/m2-devoir.component';
import { M3DevoirComponent } from './module3/m3-devoir/m3-devoir.component';
import { M4DevoirComponent } from './module4/m4-devoir/m4-devoir.component';
import { M5DevoirComponent } from './module5/m5-devoir/m5-devoir.component';
//module2
import { M2S2DComponent } from './module2/session2/m2-s2-d/m2-s2-d.component';
import { M2S1DComponent } from './module2/session1/m2-s1-d/m2-s1-d.component';
import { M2S3DComponent } from './module2/session3/m2-s3-d/m2-s3-d.component';
import { M2S4DComponent } from './module2/session4/m2-s4-d/m2-s4-d.component';
import { M2S5DComponent } from './module2/session5/m2-s5-d/m2-s5-d.component';
//module3
import { M3S2DComponent } from './module3/session2/m3-s2-d/m3-s2-d.component';
import { M3S1DComponent } from './module3/session1/m3-s1-d/m3-s1-d.component';
import { M3S3DComponent } from './module3/session3/m3-s3-d/m3-s3-d.component';
import { M3S4DComponent } from './module3/session4/m3-s4-d/m3-s4-d.component';
import { M3S5DComponent } from './module3/session5/m3-s5-d/m3-s5-d.component';
//module4
import { M4S1DComponent } from './module4/session1/m4-s1-d/m4-s1-d.component';
import { M4S2DComponent } from './module4/session2/m4-s2-d/m4-s2-d.component';
import { M4S3DComponent } from './module4/session3/m4-s3-d/m4-s3-d.component';
import { M4S4DComponent } from './module4/session4/m4-s4-d/m4-s4-d.component';
import { M4S5DComponent } from './module4/session5/m4-s5-d/m4-s5-d.component';
//module5
import { M5S1DComponent } from './module5/session1/m5-s1-d/m5-s1-d.component';
import { M5S2DComponent } from './module5/session2/m5-s2-d/m5-s2-d.component';
import { M5S3DComponent } from './module5/session3/m5-s3-d/m5-s3-d.component';
import { M5S4DComponent } from './module5/session4/m5-s4-d/m5-s4-d.component';
import { M5S5DComponent } from './module5/session5/m5-s5-d/m5-s5-d.component';
import { Module1userComponent } from './ModuleApprenant/module1user/module1user.component';
import { Module2userComponent } from './ModuleApprenant/module2user/module2user.component';
import { Module3userComponent } from './ModuleApprenant/module3user/module3user.component';
import { Module4userComponent } from './ModuleApprenant/module4user/module4user.component';
import { Module5userComponent } from './ModuleApprenant/module5user/module5user.component';


//Examen
import { CreateComponent } from './create/create.component';
import { ExamenComponent } from './examen/examen.component';


import { ListComponent } from './list/list.component';
import { CreateBadgeComponent } from './create-badge/create-badge.component';
import { PaiementComponent } from './paiement/paiement.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ExamencertifComponent } from './examencertif/examencertif.component';
import { OpinionComponent } from './opinion/opinion.component';
import { ChatComponent } from './chat/chat.component';
import { ChatApprenantComponent } from './chat-apprenant/chat-apprenant.component';
import { ChatTuteurComponent } from './chat-tuteur/chat-tuteur.component';
import { AdminGuardService } from './_services/admin-guard.service';
import { UserGuardService } from './_services/user-guard.service';
import { TuteurGuardService } from './_services/tuteur-guard.service';
const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'profile', component: ProfileComponent },
{ path: 'user', component: BoardUserComponent },
{ path: 'mod', component: BoardModeratorComponent },
{ path: 'admin', component: BoardAdminComponent },
{path: 'cours', component: CoursComponent, canActivate:[AuthGuardService]},
{path: 'generalites',  component: GeneralitesComponent  , canActivate:[AuthGuardService]},
{path: 'notes', component: NotesComponent  ,canActivate:[UserGuardService]},
{path: 'badges',  component: BadgesComponent ,canActivate:[UserGuardService]},
{path: 'cours-mod',  component: CoursModComponent , canActivate:[TuteurGuardService]},
//module1
{path: 'documentation',  component: DocumentationComponent , canActivate:[TuteurGuardService]},
{path: 'm1-s2-d',  component: M1S2DComponent ,canActivate:[TuteurGuardService]},
{path: 'm1-s3-d',  component: M1S3DComponent ,canActivate:[TuteurGuardService]},
{path: 'm1-s4-d',  component: M1S4DComponent , canActivate:[TuteurGuardService]},
{path: 'm1-s5-d',  component: M1S5DComponent , canActivate:[TuteurGuardService]},
{path: 'm1-devoir',  component:M1DevoirComponent ,canActivate:[TuteurGuardService]},
//module2
{path: 'm2-s1-d',  component: M2S1DComponent , canActivate:[TuteurGuardService]},
{path: 'm2-s2-d',  component: M2S2DComponent ,canActivate:[TuteurGuardService]},
{path: 'm2-s3-d',  component: M2S3DComponent , canActivate:[TuteurGuardService]},
{path: 'm2-s4-d',  component: M2S4DComponent , canActivate:[TuteurGuardService]},
{path: 'm2-s5-d',  component: M2S5DComponent , canActivate:[TuteurGuardService]},


//module3
{path: 'm3-s1-d',  component: M3S1DComponent , canActivate:[TuteurGuardService]},
{path: 'm3-s2-d',  component: M3S2DComponent , canActivate:[TuteurGuardService]},
{path: 'm3-s3-d',  component: M3S3DComponent ,canActivate:[TuteurGuardService]},
{path: 'm3-s4-d',  component: M3S4DComponent , canActivate:[TuteurGuardService]},
{path: 'm3-s5-d',  component: M3S5DComponent , canActivate:[TuteurGuardService]},
{path: 'm3-devoir',  component:M3DevoirComponent ,canActivate:[TuteurGuardService]},
//module4
{path: 'm4-s1-d',  component: M4S1DComponent ,canActivate:[TuteurGuardService]},
{path: 'm4-s2-d',  component: M4S2DComponent ,canActivate:[TuteurGuardService]},
{path: 'm4-s3-d',  component: M4S3DComponent , canActivate:[TuteurGuardService]},
{path: 'm4-s4-d',  component: M4S4DComponent , canActivate:[TuteurGuardService]},
{path: 'm4-s5-d',  component: M4S5DComponent , canActivate:[TuteurGuardService]},
{path: 'm4-devoir',  component:M4DevoirComponent ,canActivate:[TuteurGuardService]},
//module5
{path: 'm5-s1-d',  component: M5S1DComponent , canActivate:[TuteurGuardService]},
{path: 'm5-s2-d',  component: M5S2DComponent , canActivate:[TuteurGuardService]},
{path: 'm5-s3-d',  component: M5S3DComponent , canActivate:[TuteurGuardService]},
{path: 'm5-s4-d',  component: M5S4DComponent , canActivate:[TuteurGuardService]},
{path: 'm5-s5-d',  component: M5S5DComponent , canActivate:[TuteurGuardService]},
{path: 'm5-devoir',  component:M5DevoirComponent , canActivate:[TuteurGuardService]},

//Module de user
{path: 'module1user',  component: Module1userComponent , canActivate:[UserGuardService]},
{path: 'module2user',  component: Module2userComponent ,canActivate:[UserGuardService]},
{path: 'module3user',  component: Module3userComponent ,canActivate:[UserGuardService]},
{path: 'module4user',  component: Module4userComponent ,canActivate:[UserGuardService]},
{path: 'module5user',  component: Module5userComponent , canActivate:[UserGuardService]},




{
  path: 'register', component: UserComponent,
  children: [{ path: '', component: RegisterComponent }]
},
{
  path: 'login', component: UserComponent,
  children: [{ path: '', component: LoginComponent }]
},
{path : 'menu1',  component: Menu1Component ,canActivate:[UserGuardService]},
{path : 'profil-utilisateur',  component: ProfilUtilisateurComponent,canActivate:[UserGuardService]},
{path : 'cours',  component: CoursComponent,canActivate:[UserGuardService]},

{path : 'menu2',  component: Menu2Component , canActivate:[TuteurGuardService]},
{path : 'profil-tuteur',  component: ProfilTuteurComponent,canActivate:[TuteurGuardService]},
{path : 'liste-utilisateur-mod',  component: ListeUtilisateurModComponent,canActivate:[TuteurGuardService]},
//Examen
{path : "examen/:id" , component : ExamenComponent, canActivate:[AuthGuardService]},
  {path : "create" , component : CreateComponent,canActivate:[TuteurGuardService]},
  {path : "list" , component : ListComponent,canActivate:[TuteurGuardService]},

{ path : '', redirectTo:'/template', pathMatch : 'full'},




{path : "create-badge" , component : CreateBadgeComponent, canActivate:[AdminGuardService]},
{path : 'menu',  component: MenuComponent,canActivate:[AdminGuardService]},
{path : 'table-moderator',  component: TableModeratorComponent, canActivate:[AdminGuardService]},
{path : 'profil-admin',  component: ProfilAdminComponent,canActivate:[AdminGuardService]},
{path : 'table-profil',  component: TableProfilComponent,canActivate:[AdminGuardService]},


{path : 'template',  component:TemplateComponent},
{path : 'course-grid',  component:CourseGridComponent},
{path : 'teachers',  component:TeachersComponent},
{path : 'paiement',  component:PaiementComponent, canActivate:[AuthGuardService]},
{path : 'certifications',  component:CertificationsComponent,canActivate:[UserGuardService]},
{path : 'examencertif',  component:ExamencertifComponent, canActivate:[AuthGuardService]},

{path : 'chat',  component:ChatComponent,canActivate:[AdminGuardService]},
{path : 'chat-apprenant',  component:ChatApprenantComponent,canActivate:[UserGuardService]},
{path : 'chat-tuteur',  component:ChatTuteurComponent, canActivate:[TuteurGuardService]},


{path : 'opinion',  component:OpinionComponent, canActivate:[AuthGuardService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
