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
                primary="Name"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
                secondary="Indra Cahya Edytya S.Kom"
                secondaryTypographyProps={{
                  fontSize: 20,
                }}
              />
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="Place, date of birth"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
                secondaryTypographyProps={{
                  fontSize: 20,
                }}
                secondary="Surabaya, 22 March 1994"
              />
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="Last Education"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
                secondary="(S1) Bachelor of Informatics Engineering at UNTAG Surabaya"
                secondaryTypographyProps={{
                  fontSize: 20,
                }}
              />
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="Gender"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
                secondary="Male"
                secondaryTypographyProps={{
                  fontSize: 20,
                }}
              />
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="Address"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
                secondary="Kedungturi permai II V-8, Sidoarjo"
                secondaryTypographyProps={{
                  fontSize: 20,
                }}
              />
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="Age"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
                secondary="30"
                secondaryTypographyProps={{
                  fontSize: 20,
                }}
              />
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="Height"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
                secondary="172cm"
                secondaryTypographyProps={{
                  fontSize: 20,
                }}
              />
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="Phone"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
                secondary="081335630404"
                secondaryTypographyProps={{
                  fontSize: 20,
                }}
              />
            </ListItem>
            <ListItem disableGutters disablePadding>
              <ListItemText
                primary="Email"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
                secondary="indracahyae@gmail.copm"
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
      {/* tech skills (list item) + tech stack (list item + icon) */}
      {/* formal edu (timeline) + non formal edu (timeline) */}
      {/* achievements (timeline) + organizations (timeline) */}
    </Container>
  );
}
