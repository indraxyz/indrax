"use client";

import {
  Grid2 as Grid,
  Typography,
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { timelineItemClasses } from "@mui/lab/TimelineItem";
import {
  Person as PersonIcon,
  ContactPage as ContactIcon,
  MoreTime as MoreTimeIcon,
  Computer as ComputerIcon,
  EmojiObjects as EmojiObjectsIcon,
  Layers as LayersIcon,
  School as SchoolIcon,
  NewReleases as NewReleasesIcon,
  Group as GroupIcon,
  EmojiEvents as EmojiEventsIcon,
} from "@mui/icons-material";
import Image from "next/image";
import FotoProfile from "../public/foto-profile.jpg";

const customLoader = ({ src, width, quality }) => {
  return `${src}`;
};

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ paddingTop: 4 }}>
      {/* foto + about*/}
      <Grid container spacing={5}>
        <Grid
          display={"flex"}
          size={{ xs: 12, md: 3 }}
          sx={{ justifyContent: "center" }}
        >
          <Image
            unoptimized
            loader={customLoader}
            src={FotoProfile}
            alt="photo profile"
            className="foto-profile"
          />
        </Grid>
        <Grid size={{ xs: 12, md: 9 }}>
          <List disablePadding>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="Indra Cahya Edytya "
                secondary="Software Engineer"
                primaryTypographyProps={{
                  fontSize: 24,
                  color: "primary",
                  fontWeight: "bold",
                }}
                secondaryTypographyProps={{
                  fontSize: 20,
                  fontStyle: "italic",
                }}
              />
            </ListItem>
          </List>
          <ListItem disableGutters disablePadding sx={{ marginTop: 3 }}>
            <ListItemAvatar>
              <Avatar
                variant="rounded"
                sx={{
                  bgcolor: "black",
                  fontSize: 25,
                }}
              >
                {/* <PersonIcon /> */}
                🙋
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="About Me"
              primaryTypographyProps={{
                fontSize: 20,
                fontWeight: "medium",
                letterSpacing: 0,
              }}
            />
          </ListItem>
          <Typography variant="body1" sx={{ fontSize: 20, marginTop: 2 }}>
            Software engineering is like an inseparable part of my life. I feel
            alive and always enjoy it. I am a adaptive, discipline, creative,
            communicative, problem solver and collaborative person. As a
            software engineer I am an expert in frontend, backend, manage
            project (web and mobile).
          </Typography>
        </Grid>
      </Grid>

      {/* identity = list item*/}
      <Grid container>
        <Grid size={{ xs: 12 }}>
          <List>
            <ListItem disableGutters disablePadding sx={{ marginTop: 3 }}>
              <ListItemAvatar>
                <Avatar
                  variant="rounded"
                  sx={{
                    bgcolor: "black",
                  }}
                >
                  🗂️
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Identity"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
              />
            </ListItem>
            <ListItem disableGutters disablePadding sx={{ marginTop: 2 }}>
              <ListItemText
                primary="Indra Cahya Edytya S.Kom"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
                secondary="Name"
                secondaryTypographyProps={{
                  fontSize: 20,
                }}
              />
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="Surabaya, 22 March 1994"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
                secondaryTypographyProps={{
                  fontSize: 20,
                }}
                secondary="Place, date of birth"
              />
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="(S1) Bachelor of Informatics Engineering at (UNTAG) Universitas 17 Agustus 1945 Surabaya"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
                secondary="Last Education"
                secondaryTypographyProps={{
                  fontSize: 20,
                }}
              />
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="Male"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
                secondary="Gender"
                secondaryTypographyProps={{
                  fontSize: 20,
                }}
              />
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="Kedungturi permai II V-8, Kedungturi, Taman, Sidoarjo, 61257"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
                secondary="Address"
                secondaryTypographyProps={{
                  fontSize: 20,
                }}
              />
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="30"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
                secondary="Age"
                secondaryTypographyProps={{
                  fontSize: 20,
                }}
              />
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="Married"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
                secondary="Status"
                secondaryTypographyProps={{
                  fontSize: 20,
                }}
              />
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="172 cm"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
                secondary="Height"
                secondaryTypographyProps={{
                  fontSize: 20,
                }}
              />
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="0813 3563 0404"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
                secondary="Phone"
                secondaryTypographyProps={{
                  fontSize: 20,
                }}
              />
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="indracahyae@gmail.com"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
                secondary="Email"
                secondaryTypographyProps={{
                  fontSize: 20,
                }}
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>

      {/* experiences = timeline */}
      <List>
        <ListItem disableGutters disablePadding sx={{ marginTop: 3 }}>
          <ListItemAvatar>
            <Avatar
              variant="rounded"
              sx={{
                bgcolor: "black",
              }}
            >
              🏢
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Experiences"
            primaryTypographyProps={{
              fontSize: 20,
              fontWeight: "medium",
              letterSpacing: 0,
            }}
          />
        </ListItem>
      </List>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6">08 2012 - 02 2013</Typography>
            <Typography variant="h5">
              LPK Mitra Computer, Sidoarjo (Lembaga Pelatihan Kerja)
            </Typography>
            <Typography>
              as technician, professional computer trainer (microsoft office,
              graphic design, technician, networking).
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6">03 2016 - 05 2016</Typography>
            <Typography variant="h5">CV. Mitra Mia Group, Surabaya</Typography>
            <Typography>
              as Fullstack Web, Team Lead of 7 members (freelance). <br />
              Build Online shop web base about list of properties for sale. Use
              Laravel, jquery, bootstrap, mySql, json, github, rest API, vps
              server.
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6">06 2016 - 04 2018</Typography>
            <Typography variant="h5">
              CV. Indscript Computer, Sidoarjo
            </Typography>
            <Typography>
              as Fullstack Software Engineer <br />
              Make a web/android app base on clients request/ requirement
              (company profile, online store, park, waiting system, pos,
              custom). Use Laravel, ExpressJs, ReactJs, Materil Ui, React
              Native, mySQL, orm, github, rest API.
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6">05 2018 - 05 2019</Typography>
            <Typography variant="h5">
              Yayasan iik Bhakti Wiyata (head office Surabaya) partner with PT
              Sigma Intan Mahakarya, Surabaya
            </Typography>
            <Typography>
              as Fullstack Software Engineer. <br />
              Make Ners App, school app, canteen app from scratch, custom (web &
              app). Use javascript, Typescript, Material Ui, tailwind, reactJs,
              Redux, NextJs, expressJs, Laravel, React Native, MySQL,
              postgreSql, github, graphql, rest API, web socket.
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6">06 2019 - Now</Typography>
            <Typography variant="h5">
              PT Kode Kreatif Digital, Sidoarjo
            </Typography>
            <Typography>
              as Fullstack Software Engineer <br />
              make web app, and hybrid mobile app base on request/requirement
              (profile, online store, education, health, finance, custom ) use
              Typescript, Material Ui, tailwind, ant design, reactJs, Redux,
              NextJs, expressJs, Laravel, React Native, MySQL, postgreSql, orm,
              github, graphql, rest API, web socket, golang, phyton, docker,
              kubernetes.
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>

      {/* portfolio = list iten */}
      <List>
        <ListItem
          disableGutters
          disablePadding
          sx={{ marginTop: 2, marginBottom: 2 }}
        >
          <ListItemAvatar>
            <Avatar
              variant="rounded"
              sx={{
                bgcolor: "black",
              }}
            >
              {/* <ComputerIcon /> */}
              💻
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Portfolio"
            primaryTypographyProps={{
              fontSize: 20,
              fontWeight: "medium",
              letterSpacing: 0,
            }}
          />
        </ListItem>
        <ListItem disableGutters disablePadding>
          <ListItemText
            primary="Github https://github.com/indraxyz"
            primaryTypographyProps={{
              fontSize: 20,
              fontWeight: "medium",
              letterSpacing: 0,
            }}
            secondaryTypographyProps={{
              fontSize: 20,
            }}
            secondary="My portfolio place and explore code on software development"
          />
        </ListItem>
        <ListItem disableGutters disablePadding>
          <ListItemText
            primary="Crimenesia, manage crime report between police and society, 2017, my Thesis at UNTAG Surabaya"
            primaryTypographyProps={{
              fontSize: 20,
              fontWeight: "medium",
              letterSpacing: 0,
            }}
            secondaryTypographyProps={{
              fontSize: 20,
            }}
            secondary="main features is  crime reporting and crime mapping, Web and android platform using Laravel, mySQL, jQuery, semantic, notyjs, reactjs, react native"
          />
        </ListItem>
        <ListItem disableGutters disablePadding>
          <ListItemText
            primary="Parkir, manage parking area, 2021."
            primaryTypographyProps={{
              fontSize: 20,
              fontWeight: "medium",
              letterSpacing: 0,
            }}
            secondaryTypographyProps={{
              fontSize: 20,
            }}
            secondary="main features is auto select location, park entrance and out, tariff and payment, report. Web base using laravel, tailwind, mysql."
          />
        </ListItem>
        <ListItem disableGutters disablePadding>
          <ListItemText
            primary="Belov, correction data system,  2022."
            primaryTypographyProps={{
              fontSize: 20,
              fontWeight: "medium",
              letterSpacing: 0,
            }}
            secondaryTypographyProps={{
              fontSize: 20,
            }}
            secondary="main features is manage ticket (detail, attachments, verification, history, delete). Web base using Laravel, mySQL, reactjs, bulmacss."
          />
        </ListItem>
        <ListItem disableGutters disablePadding>
          <ListItemText
            primary="Spektra, project monitoring, 2023."
            primaryTypographyProps={{
              fontSize: 20,
              fontWeight: "medium",
              letterSpacing: 0,
            }}
            secondaryTypographyProps={{
              fontSize: 20,
            }}
            secondary="main features are monitoring progress, register and approvals projects. Web base with nextjs, tailwind, materialui, emotionjs, rest api. "
          />
        </ListItem>
        <ListItem disableGutters disablePadding>
          <ListItemText
            primary="WisataApp, booking rooms, 2024."
            primaryTypographyProps={{
              fontSize: 20,
              fontWeight: "medium",
              letterSpacing: 0,
            }}
            secondaryTypographyProps={{
              fontSize: 20,
            }}
            secondary="main features are search property, hotels, available rooms. Web base with typescript, nextjs, tailwind, materialui, rest api. "
          />
        </ListItem>
      </List>

      {/* tech skills (list item) + tech stack (list item) */}
      <Grid container spacing={4} sx={{ marginTop: 4 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <List>
            <ListItem disableGutters disablePadding sx={{ marginBottom: 2 }}>
              <ListItemAvatar>
                <Avatar
                  variant="rounded"
                  sx={{
                    bgcolor: "black",
                  }}
                >
                  💡
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Tech Skills"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
              />
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="Cross team collaboration and communication."
                primaryTypographyProps={{
                  fontSize: 20,
                  letterSpacing: 0,
                }}
              />
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="Adapt to new and different technologies."
                primaryTypographyProps={{
                  fontSize: 20,
                  letterSpacing: 0,
                }}
              />
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="Analysis of business problems that solved with smart solutions."
                primaryTypographyProps={{
                  fontSize: 20,
                  letterSpacing: 0,
                }}
              />
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="Ui Ux with better journey."
                primaryTypographyProps={{
                  fontSize: 20,
                  letterSpacing: 0,
                }}
              />
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="Algorithm, OOP, functional, clean and safe code."
                primaryTypographyProps={{
                  fontSize: 20,
                  letterSpacing: 0,
                }}
              />
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="Data structure, database design."
                primaryTypographyProps={{
                  fontSize: 20,
                  letterSpacing: 0,
                }}
              />
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="Black box, white box, Unit testing."
                primaryTypographyProps={{
                  fontSize: 20,
                  letterSpacing: 0,
                }}
              />
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="Solve bottlenecks, fixing errors and bugs."
                primaryTypographyProps={{
                  fontSize: 20,
                  letterSpacing: 0,
                }}
              />
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="System architecture and security, design pattern."
                primaryTypographyProps={{
                  fontSize: 20,
                  letterSpacing: 0,
                }}
              />
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="Project management maintaining monitoring improve and documented."
                primaryTypographyProps={{
                  fontSize: 20,
                  letterSpacing: 0,
                }}
              />
            </ListItem>
          </List>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <List>
            <ListItem disableGutters disablePadding sx={{ marginBottom: 2 }}>
              <ListItemAvatar>
                <Avatar
                  variant="rounded"
                  sx={{
                    bgcolor: "black",
                  }}
                >
                  {/* <LayersIcon /> */}
                  💎
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Tech Stacks"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
              />
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="Managements"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
                secondary="Agile, scrum, sprint"
                secondaryTypographyProps={{
                  fontSize: 20,
                }}
              />
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="Design"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
                secondary="Figma, CorelDraw, Ai, Ps, Lr"
                secondaryTypographyProps={{
                  fontSize: 20,
                }}
              />
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="Languages"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
                secondary="HTML, CSS, Javascript, Typescript, PHP, Python, Go "
                secondaryTypographyProps={{
                  fontSize: 20,
                }}
              />
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="Frontend"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
                secondary="Material Ui, tailwind, ant design, ReactJs, Redux, NextJs"
                secondaryTypographyProps={{
                  fontSize: 20,
                }}
              />
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="Backend"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
                secondary=" NodeJs, expressJs, NestJs, Laravel, Web Socket"
                secondaryTypographyProps={{
                  fontSize: 20,
                }}
              />
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="Mobile"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
                secondary="React Native"
                secondaryTypographyProps={{
                  fontSize: 20,
                }}
              />
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="Database"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
                secondary=" mySQL, postgreSQL, mongodb, ORM (typeorm, sequelize, prisma)"
                secondaryTypographyProps={{
                  fontSize: 20,
                }}
              />
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="Versioning"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
                secondary="Github"
                secondaryTypographyProps={{
                  fontSize: 20,
                }}
              />
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="Testing"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
                secondary="Jest, jasmine, mocha"
                secondaryTypographyProps={{
                  fontSize: 20,
                }}
              />
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="Microservices"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
                secondary="Graphql, Rest API, Redis, JSON"
                secondaryTypographyProps={{
                  fontSize: 20,
                }}
              />
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="Containers"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
                secondary="Docker, Kubernetes"
                secondaryTypographyProps={{
                  fontSize: 20,
                }}
              />
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="Operating System"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
                secondary="Windows, Linux, macOS"
                secondaryTypographyProps={{
                  fontSize: 20,
                }}
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>

      {/* formal edu (timeline) + non formal edu (timeline) */}
      <Grid container spacing={4} marginTop={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <List>
            <ListItem disableGutters disablePadding sx={{ marginBottom: 2 }}>
              <ListItemAvatar>
                <Avatar
                  variant="rounded"
                  sx={{
                    bgcolor: "black",
                  }}
                >
                  {/* <SchoolIcon /> */}
                  🎓
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Formal Education"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
              />
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="Natural Sciences Major of SMAN 1 Gedangan, Sidoarjo"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
                secondary="2009-2012 Senior High School"
                secondaryTypographyProps={{
                  fontSize: 20,
                }}
              />
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="Bachelor Degree (S1) of Informatics Engineering"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
                secondary="08 2013- 02 2018 at (UNTAG) Universitas 17 Agustus 1945 Surabaya, GPA 3.66 "
                secondaryTypographyProps={{
                  fontSize: 20,
                }}
              />
            </ListItem>
          </List>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <List>
            <ListItem disableGutters disablePadding sx={{ marginBottom: 2 }}>
              <ListItemAvatar>
                <Avatar
                  variant="rounded"
                  sx={{
                    bgcolor: "black",
                  }}
                >
                  {/* <NewReleasesIcon /> */}
                  🧾
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Non Formal Education"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
              />
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="Analysts and developers of software and applications, implementation of information technology audit procedures"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
                secondary="03 2018 - 03 2021 at BNSP Certification (Certificate of Competence)"
                secondaryTypographyProps={{
                  fontSize: 20,
                }}
              />
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="Website application security audit"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
                secondary="04 2019 at ISTTS Institut Sains Terapan & Teknologi Surabaya (Seminars & Workshops)"
                secondaryTypographyProps={{
                  fontSize: 20,
                }}
              />
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="Building iOT Application with Microcontroller, sensors, web server, mqtt cloud."
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
                secondary="10 2019 at INIXINDO (training)"
                secondaryTypographyProps={{
                  fontSize: 20,
                }}
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>

      {/* achievements (timeline) + organizations (timeline) */}
      <Grid container spacing={4} marginTop={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <List>
            <ListItem disableGutters disablePadding sx={{ marginBottom: 2 }}>
              <ListItemAvatar>
                <Avatar
                  variant="rounded"
                  sx={{
                    bgcolor: "black",
                  }}
                >
                  {/* <EmojiEventsIcon /> */}
                  🏆
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Achievements"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
              />
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="8th Best Graduate at SMPN 3 Waru"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
                secondary="based on national exams & school exams (Junior High School) "
                secondaryTypographyProps={{
                  fontSize: 20,
                }}
              />
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="1st Champion of DANS 2010"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
                secondary=" Duta Anti Narkoba Sidoarjo (DANS) Badan Narkotika Nasional Kabupaten (BNNK) Sidoarjo."
                secondaryTypographyProps={{
                  fontSize: 20,
                }}
              />
            </ListItem>
          </List>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <List>
            <ListItem disableGutters disablePadding sx={{ marginBottom: 2 }}>
              <ListItemAvatar>
                <Avatar
                  variant="rounded"
                  sx={{
                    bgcolor: "black",
                  }}
                >
                  {/* <GroupIcon /> */}
                  🎗️
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Organizations"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
              />
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="Vice Chairman of DANS Sidoarjo"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
                secondary="2010 - 2011 at Duta Anti Narkoba Sidoarjo (DANS) BNNK Sidoarjo."
                secondaryTypographyProps={{
                  fontSize: 20,
                }}
              />
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="Member of Pencak Silat Merpati Putih"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
                secondary="2013 - 2015 at Universitas 17 Agustus 1945 Surabaya"
                secondaryTypographyProps={{
                  fontSize: 20,
                }}
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Grid
        size={{ xs: 12 }}
        display={"flex"}
        marginTop={6}
        marginBottom={4}
        sx={{ justifyContent: "center" }}
      >
        <Typography color="textSecondary"> made with ❤️</Typography>
      </Grid>
    </Container>
  );
}
