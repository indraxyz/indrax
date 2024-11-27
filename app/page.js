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
} from "@mui/icons-material";

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
          <img
            src="./foto-profile.jpg"
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
                }}
              >
                <PersonIcon />
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
                  <ContactIcon />
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
                primary="(S1) Bachelor of Informatics Engineering at UNTAG Surabaya"
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
              <MoreTimeIcon />
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
              PPLMK Mitra Computer (Pusat Pendidikan dan Latihan Management
              Komputer)
            </Typography>
            <Typography>
              technician, computer trainer (office, design, technician,
              networking).
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
            <Typography variant="h5">CV. Mitra Mia Group</Typography>
            <Typography>
              Project base freelance web developer as Team Lead.
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
            <Typography variant="h5">CV. Indscript Computer</Typography>
            <Typography>Fullstack Software Engineer (web, android)</Typography>
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
              Yayasan iik Bhakti Wiyata - PT Sigma Intan Mahakarya
            </Typography>
            <Typography>
              Fullstack Software Engineer (web, hybrid mobile)
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6">06 2019 - Now</Typography>
            <Typography variant="h5">PT Kode Kreatif Digital</Typography>
            <Typography>
              Fullstack Software Engineer (web, hybrid mobile)
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
              <ComputerIcon />
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
            secondary="My portfolio place and explore new things of software development"
          />
        </ListItem>
        <ListItem disableGutters disablePadding>
          <ListItemText
            primary="Crimenesia, manage crime report between police and society, 2017, Skripsi S1 UNTAG Surabaya"
            primaryTypographyProps={{
              fontSize: 20,
              fontWeight: "medium",
              letterSpacing: 0,
            }}
            secondaryTypographyProps={{
              fontSize: 20,
            }}
            secondary="main features is  crime reporting and crime mapping, Web and android platform with Laravel, mySQL, jQuery, semantic, notyjs, reactjs, react native"
          />
        </ListItem>
        <ListItem disableGutters disablePadding>
          <ListItemText
            primary="Parkir, manage parking area, 2021, freelance project."
            primaryTypographyProps={{
              fontSize: 20,
              fontWeight: "medium",
              letterSpacing: 0,
            }}
            secondaryTypographyProps={{
              fontSize: 20,
            }}
            secondary="main features is auto select location, park entrance and out, tariff and payment, report. Web base with laravel, tailwind, mysql."
          />
        </ListItem>
        <ListItem disableGutters disablePadding>
          <ListItemText
            primary="Belov, correction data system,  2022, freelance project."
            primaryTypographyProps={{
              fontSize: 20,
              fontWeight: "medium",
              letterSpacing: 0,
            }}
            secondaryTypographyProps={{
              fontSize: 20,
            }}
            secondary="main features is manage ticket (detail, attachments, verification, history, delete). Web base with Laravel, mySQL, reactjs, bulmacss, babel."
          />
        </ListItem>
        <ListItem disableGutters disablePadding>
          <ListItemText
            primary="Spektra, project monitoring, 2023, freelance project."
            primaryTypographyProps={{
              fontSize: 20,
              fontWeight: "medium",
              letterSpacing: 0,
            }}
            secondaryTypographyProps={{
              fontSize: 20,
            }}
            secondary="main features is monitoring progress, register and approvals projects. Web base with nextjs, tailwind, materialui, emotionjs"
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
                  <EmojiObjectsIcon />
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
                  <LayersIcon />
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
                secondary="Figma, adobe XD, CorelDraw, illustrator, Photoshop, Lightroom"
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
                secondary="HTML, CSS, SASS, Javascript, Typescript, PHP, JSON, Python"
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
                secondary="Material Ui, tailwind, ant design, emotionJs, ReactJs, Redux, NextJs"
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
                secondary=" NodeJs, expressJs, Laravel, NestJs"
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
                secondary="Graphql, Rest API, Redis, Json"
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

      {/* achievements (timeline) + organizations (timeline) */}
    </Container>
  );
}
