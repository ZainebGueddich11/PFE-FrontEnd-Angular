import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { MenuComponent } from './menu/menu.component';
import { ProfilAdminComponent } from './profil-admin/profil-admin.component';
import { UserComponent } from './user/user.component';
import { TableProfilComponent } from './table-profil/table-profil.component';

import { Menu1Component } from './menu1/menu1.component';
import { ProfilUtilisateurComponent } from './profil-utilisateur/profil-utilisateur.component';
import { CoursComponent } from './cours/cours.component';
import { BadgesComponent } from './badges/badges.component';
import { GeneralitesComponent } from './generalites/generalites.component';
import { NotesComponent } from './notes/notes.component';
import { TemplateComponent } from './template/template.component';
import { TeachersComponent } from './teachers/teachers.component';
import { CourseGridComponent } from './course-grid/course-grid.component';
import { TableModeratorComponent } from './table-moderator/table-moderator.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Menu2Component } from './menu2/menu2.component';
import { ProfilTuteurComponent } from './profil-tuteur/profil-tuteur.component';
import { ListeUtilisateurModComponent } from './liste-utilisateur-mod/liste-utilisateur-mod.component';
import { CoursModComponent } from './cours-mod/cours-mod.component';
/**********MODULE1 **********************************/
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

/**********MODULE2 **********************************/
import { M2S1DComponent } from './module2/session1/m2-s1-d/m2-s1-d.component';
import { M2S2DComponent } from './module2/session2/m2-s2-d/m2-s2-d.component';
import { M2S4DComponent } from './module2/session4/m2-s4-d/m2-s4-d.component';
import { M2S3DComponent } from './module2/session3/m2-s3-d/m2-s3-d.component';
import { M2S5DComponent } from './module2/session5/m2-s5-d/m2-s5-d.component';

import { M3S1DComponent } from './module3/session1/m3-s1-d/m3-s1-d.component';
import { M3S2DComponent } from './module3/session2/m3-s2-d/m3-s2-d.component';
import { M3S3DComponent } from './module3/session3/m3-s3-d/m3-s3-d.component';
import { M3S4DComponent } from './module3/session4/m3-s4-d/m3-s4-d.component';
import { M3S5DComponent } from './module3/session5/m3-s5-d/m3-s5-d.component';
import { M5S1DComponent } from './module5/session1/m5-s1-d/m5-s1-d.component';
import { M5S4DComponent } from './module5/session4/m5-s4-d/m5-s4-d.component';
import { M5S2DComponent } from './module5/session2/m5-s2-d/m5-s2-d.component';
import { M5S3DComponent } from './module5/session3/m5-s3-d/m5-s3-d.component';
import { M5S5DComponent } from './module5/session5/m5-s5-d/m5-s5-d.component';
import { M4S1DComponent } from './module4/session1/m4-s1-d/m4-s1-d.component';
import { M4S2DComponent } from './module4/session2/m4-s2-d/m4-s2-d.component';
import { M4S3DComponent } from './module4/session3/m4-s3-d/m4-s3-d.component';
import { M4S4DComponent } from './module4/session4/m4-s4-d/m4-s4-d.component';
import { M4S5DComponent } from './module4/session5/m4-s5-d/m4-s5-d.component';
import { Module1userComponent } from './ModuleApprenant/module1user/module1user.component';
import { Module2userComponent } from './ModuleApprenant/module2user/module2user.component';
import { Module3userComponent } from './ModuleApprenant/module3user/module3user.component';
import { Module4userComponent } from './ModuleApprenant/module4user/module4user.component';
import { Module5userComponent } from './ModuleApprenant/module5user/module5user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateComponent } from './create/create.component';
import { ExamenComponent } from './examen/examen.component';
import { ListComponent } from './list/list.component';
import { DemoMaterialModule } from './material-module';
import { MatNativeDateModule } from '@angular/material/core';
import { FlashMessagesModule } from 'flash-messages-angular';
import { CreateBadgeComponent } from './create-badge/create-badge.component';
import { NgxStripeModule } from 'ngx-stripe';
import { PaiementComponent } from './paiement/paiement.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ExamencertifComponent } from './examencertif/examencertif.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { OpinionComponent } from './opinion/opinion.component';
import { ChatComponent } from './chat/chat.component';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { WebSocketService } from './_services/web-socket.service';
import { ChatApprenantComponent } from './chat-apprenant/chat-apprenant.component';
import { ChatTuteurComponent } from './chat-tuteur/chat-tuteur.component';
const config: SocketIoConfig = { url: 'http://localhost:8080', options: {} };


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    MenuComponent,
    ProfilAdminComponent,
    UserComponent,
    TableProfilComponent,
    Menu1Component,
    ProfilUtilisateurComponent,
    CoursComponent,
    NotesComponent,
    BadgesComponent,
    GeneralitesComponent,
    TemplateComponent,
    TeachersComponent,
    CourseGridComponent,
    TableModeratorComponent,
    Menu2Component,
    ProfilTuteurComponent,
    ListeUtilisateurModComponent,
    CoursModComponent,
    //MODULE1
    DocumentationComponent,
    M1S2DComponent,
    M1S3DComponent,
    M1S4DComponent,
    M1S5DComponent,
    //DEVIVOIR DES MODULES
    M1DevoirComponent,
    M2DevoirComponent,
    M3DevoirComponent,
    M4DevoirComponent,
    M5DevoirComponent,
    //MODULE2
    M2S1DComponent,
    M2S2DComponent,
    M2S3DComponent,
    M2S4DComponent,
    M2S5DComponent,
    //MODULE3
    M3S1DComponent,
    M3S2DComponent,
    M3S3DComponent,
    M3S4DComponent,
    M3S5DComponent,
    //MODULE4
    M4S1DComponent,
    M4S2DComponent,
    M4S3DComponent,
    M4S4DComponent,
    M4S5DComponent,
    //MODULE5
    M5S1DComponent,
    M5S4DComponent,
    M5S2DComponent,
    M5S3DComponent,
    M5S5DComponent,
    //moduleUser
    Module1userComponent,
    Module2userComponent,
    Module3userComponent,
    Module4userComponent,
    Module5userComponent,

    //Examen
    CreateComponent,
    ExamenComponent,
    ListComponent,
    CreateBadgeComponent,
    PaiementComponent,
    CertificationsComponent,
    ExamencertifComponent,
    OpinionComponent,
    ChatComponent,
    ChatApprenantComponent,
    ChatTuteurComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxStripeModule.forRoot('pk_test_51IyEiPKXO6zoy45XtuXgikn7mzOyOxj25MGjzw1Z6BCKUH4Qme2iBJ4RU8uOZ7x1rfxu8O6utOoljGbcHznh8FlW00xVd1i1wM'),
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxQRCodeModule,
    ModalModule.forRoot(),
    FlashMessagesModule.forRoot(),
    BrowserAnimationsModule,
    SocketIoModule.forRoot(config)

  ],
  exports: [ ModalModule],
  providers: [authInterceptorProviders,WebSocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
